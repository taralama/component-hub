import { useReducer, useState } from 'react';

const TODOS_ACTIONS = {
  ADD: 'ADD',
  DELETE: 'DELETE',
  TOGGLE: 'TOGGLE',
};
type Todo = {
  id: number;
  name: string;
  completed: boolean;
};

type Action =
  | {
      type: typeof TODOS_ACTIONS.ADD;
      payload: { name: string; id: number; complete: boolean };
    }
  | {
      type: typeof TODOS_ACTIONS.DELETE;
      payload: { name: string; id: number; complete: boolean };
    }
  | {
      type: typeof TODOS_ACTIONS.TOGGLE;
      payload: { name: string; id: number; complete: boolean };
    };

const reducer = (todos: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case TODOS_ACTIONS.ADD:
      return [...todos, newTodo(action.payload.name)];
    case TODOS_ACTIONS.TOGGLE:
      return todos.map((todo) => {
        if (todo.id == action.payload.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    case TODOS_ACTIONS.DELETE:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
};
const newTodo = (name: string) => {
  return {
    id: Math.random(),
    name: name,
    completed: false,
  };
};

const Reducer = () => {
  const [name, setName] = useState('');
  const [todos, dispatch] = useReducer(reducer, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: TODOS_ACTIONS.ADD,
      payload: { id: Math.random(), name, complete: false },
    });
    setName(''); // This clears the input field
  };

  return (
    <main>
      <div className="p-4">
        <h1 className="text-amber-600 font-bold underline text-3xl">
          useReducer()
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            required
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="mt-6 border p-2 rounded"
          />
          <button className="border px-6 py-2 ml-3 rounded bg-green-700 text-white hover:cursor-pointer">
            Add
          </button>
        </form>

        {todos?.length > 0 &&
          todos?.map((todo, index) => (
            <div
              className="flex items-center justify-between mt-4 p-4 border-black shadow-xl hover:scale-[99%] hover:cursor-pointer duration-150 transition-all rounded"
              key={todo.id}
            >
              <div>
                <p
                  className={`text-lg ${todo.completed ? 'line-through' : ''}`}
                >
                  {index + 1}.{todo.name}
                </p>
              </div>
              <div>
                <button
                  onClick={() =>
                    dispatch({
                      type: TODOS_ACTIONS.DELETE,
                      payload: {
                        id: todo.id,
                        name,
                        complete: todo.completed,
                      },
                    })
                  }
                  className="border px-6 py-2 ml-3 rounded bg-red-600 text-white hover:cursor-pointer"
                >
                  Delete
                </button>
                <button
                  onClick={() =>
                    dispatch({
                      type: TODOS_ACTIONS.TOGGLE,
                      payload: { id: todo.id, name, complete: todo.completed },
                    })
                  }
                  className="border px-6 py-2 ml-3 rounded bg-blue-700 text-white hover:cursor-pointer"
                >
                  Toggle
                </button>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
};

export default Reducer;
