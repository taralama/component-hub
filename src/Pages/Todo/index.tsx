import { useState } from 'react';
import { BarGraph, Button, InputField } from '../../components';
import Board from './TodoBoard';
import { Status, status, TaskProps } from './type';

const TASKS: TaskProps[] = [
  {
    id: 1,
    title: 'Practice ',
    status: 'Todo',
    description: 'React js',
  },
  {
    id: 2,
    title: 'Practice ',
    status: 'In Progress',
    description: 'Python',
  },
  {
    id: 3,
    title: 'Practice ',
    status: 'Completed',
    description: 'PHP',
  },
  {
    id: 4,
    title: 'Practice ',
    status: 'Completed',
    description: 'C++',
  },
  {
    id: 5,
    title: 'Practice ',
    status: 'Completed',
    description: 'C',
  },
];

const SELECT_OPTIONS = ['Select Status', ...status];

console.log(SELECT_OPTIONS);

const Todo = () => {
  const [tasks, setTasks] = useState(TASKS);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [addStatus, setAddStatus] = useState<Status>(null);
  const [latestChange, setLatestChange] = useState<TaskProps[] | null>();

  const handleSubmit = () => {
    if (!description || !title) return alert('Cannot Add Empty');
    const newTasks = {
      id: Number((Math.random() * 10).toFixed()),
      description: description,
      status: addStatus,
      title: title,
    };

    setTasks([...tasks, newTasks]);
    setAddStatus(null);
    setDescription('');
    setTitle('');
  };

  const onDrop = (status: Status, position: number) => {
    console.log(
      `${activeCard} is going to place into ${status} and at position ${position}`,
    );
    if (activeCard == null) {
      console.error('Active Card null');
      return;
    }

    const taskIndex = tasks.findIndex((t) => t.id === activeCard);
    if (taskIndex === -1) return;

    const taskToMove = tasks[taskIndex];
    const updatedTasks = tasks.filter((t) => t.id !== activeCard);

    const latestUpdated = {
      ...taskToMove,
      status,
    };

    setLatestChange((prev) => {
      console.log(prev);
      if (prev == null || undefined) return [];
      return [...prev, latestUpdated];
    });

    updatedTasks.splice(position, 0, {
      ...taskToMove,
      status,
    });

    setTasks(updatedTasks);
  };

  return (
    <main className="p-2 bg-[#e2e2e2]">
      <h1 className="text-xl font-bold underline ">Task Manager</h1>

      <div className="mt-5 flex gap-3 ps-6">
        <InputField
          type="text"
          placeholder="Enter Title"
          className="border py-2 px-2"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <InputField
          type="text"
          placeholder="Enter Description"
          className="border py-2 px-2"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <select
          className="bg-white px-2 rounded"
          name=""
          id=""
          onChange={(e) => setAddStatus(e.target.value as Status)}
        >
          {SELECT_OPTIONS?.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <Button
          className="cursor-pointer active:scale-[105%] duration-100"
          onClick={handleSubmit}
          type="submit"
          btnText="Add"
          variant="primary"
        />
      </div>

      <section>
        <BarGraph tasks={tasks} latestUpdated={latestChange} />
      </section>

      <div className="grid grid-cols-2  lg:grid-cols-4 justify-center gap-6 p-10 shadow-2xl">
        <Board
          onDrop={onDrop}
          setActiveCard={setActiveCard}
          tasks={tasks}
          title="Todo"
        />
        <Board
          onDrop={onDrop}
          setActiveCard={setActiveCard}
          tasks={tasks}
          title="In Progress"
        />
        <Board
          onDrop={onDrop}
          setActiveCard={setActiveCard}
          tasks={tasks}
          title="Review"
        />
        <Board
          onDrop={onDrop}
          setActiveCard={setActiveCard}
          tasks={tasks}
          title="Completed"
        />
      </div>
    </main>
  );
};

export default Todo;
