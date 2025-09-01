import classNames from 'classnames';
import { BoardProps } from '../type';
import DropArea from '../DropArea';
import { useState } from 'react';
import TaskCard from '../TaskCard';

const Board = ({ title, tasks, setActiveCard, onDrop }: BoardProps) => {
  const [onDragStart, setOnDargStart] = useState(false);
  const [showDropInBoard, setShowDropInBoard] = useState(false);

  const filterTasks = tasks?.filter((task) => {
    return task.status === title;
  });

  return (
    <div
      onDragEnter={() => setShowDropInBoard(true)}
      onDragLeave={() => setShowDropInBoard(false)}
      onDrop={() => {
        console.log('dropped');
        setShowDropInBoard(false);
        return onDrop(title, 0);
      }}
      onDragOver={(e) => e.preventDefault()}
      onDrag={(e) => {
        e.preventDefault();
      }}
      className={classNames(
        'shadow-lg rounded-xl overflow-hidden h-96 w-full',
        {
          'bg-gray-200': showDropInBoard,
          'bg-white': !showDropInBoard,
        },
      )}
    >
      <h1
        className={classNames('text-center text-xl py-2 px-2 text-white ', {
          'bg-gray-800': title == 'Todo',
          'bg-green-400': title == 'In Progress',
          'bg-amber-400': title == 'Review',
          'bg-blue-400': title == 'Completed',
        })}
      >
        {title}
      </h1>

      <div className="px-2">
        <DropArea onDrop={() => onDrop(title, 0)} />
        {filterTasks?.map((task, index) => (
          <>
            <TaskCard
              key={task.id}
              onDragStart={onDragStart}
              setActiveCard={setActiveCard}
              setOnDargStart={setOnDargStart}
              task={task}
            />
            <DropArea onDrop={() => onDrop(title, index + 1)} />
          </>
        ))}

        {showDropInBoard && (
          <div className="h-full border-dotted text-center">Drop Here</div>
        )}
      </div>
    </div>
  );
};

export default Board;
