import classNames from 'classnames';
import { status, TaskProps } from '../../Pages/Todo/type';

interface BarGraphProps {
  tasks: TaskProps[];
  latestUpdated?: TaskProps[] | null;
}

const BarGraph = ({ tasks, latestUpdated }: BarGraphProps) => {
  const totalTask = tasks.length;

  // count tasks per status
  const countByStatus = (s: string) =>
    tasks.filter((item) => item.status === s).length;

  const percentageFinder = (count: number) =>
    totalTask === 0 ? 0 : (count / totalTask) * 100;

  return (
    <div className="p-6 mt-2 -b flex gap-6">
      <div className="shadow-xl w-full py-5 px-10 flex gap-x-32 duration-500 transition-all min-h-72 bg-white">
        <div>
          <h1 className="font-bold underline ">About the Graph</h1>
          <p className="mt-5">Total Tasks: {totalTask}</p>
          {status.map((title) => (
            <div className="flex gap-2 items-center mt-5">
              <div
                className={classNames('w-5 h-5 ', {
                  'bg-gray-800': title === 'Todo',
                  'bg-green-400': title === 'In Progress',
                  'bg-amber-400': title === 'Review',
                  'bg-blue-400': title === 'Completed',
                })}
              />

              <label htmlFor=""> {title}</label>
            </div>
          ))}
        </div>

        <div className="flex-1">
          <h1 className="font-bold underline">latest Change</h1>
          <div className="mt-5 grid grid-cols-3 gap-2">
            {latestUpdated?.length &&
              latestUpdated?.map((item) => (
                <div className=" border-[#EEEEEE] shadow-lg px-5 py-3 rounded">
                  <div className="flex gap-2 ">
                    <p>{item.id}</p>
                    <p className="font-bold">{item.title}</p>
                  </div>
                  <ul className="px-4">
                    <li className="list-disc">{item.description}</li>
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className={`shadow-lg bg-white w-96 flex items-end`}>
        {status.map((title, index) => {
          const count = countByStatus(title);
          const percentage = percentageFinder(count);

          return (
            <div
              key={index}
              className=" duration-300 transition-all h-60 p-2 flex items-end justify-center"
            >
              <div
                style={{ height: `${percentage}%` }}
                className={classNames('w-20   transition-all duration-1000', {
                  'bg-gray-800': title === 'Todo',
                  'bg-green-400': title === 'In Progress',
                  'bg-amber-400': title === 'Review',
                  'bg-blue-400': title === 'Completed',
                })}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BarGraph;
