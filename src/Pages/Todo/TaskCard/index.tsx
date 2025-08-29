import classNames from 'classnames';
import { TaskProps } from '../type';

interface TaskCardProps {
  setActiveCard: (id: number | null) => void;
  setOnDargStart: (bool: boolean) => void;
  task: TaskProps;
  onDragStart: boolean;
}

const TaskCard = ({
  setActiveCard,
  setOnDargStart,
  task,
  onDragStart,
}: TaskCardProps) => {
  return (
    <div
      key={task.id}
      draggable
      onDragStart={() => {
        setActiveCard(task.id);
        setOnDargStart(true);

        console.log('drag started');
      }}
      onDragEnd={() => {
        setActiveCard(null);
        setOnDargStart(false);
        console.log('drag ended');
      }}
      onDragLeave={() => setOnDargStart(false)}
      className={classNames(
        'border rounded-sm p-3 cursor-grab active:bg-gray-200 ',
        {
          'opacity-50': onDragStart,
        },
      )}
    >
      <h1 className="font-bold border-b">{task.title}</h1>
      <p className="ps-2">{task.description}</p>
    </div>
  );
};

export default TaskCard;
