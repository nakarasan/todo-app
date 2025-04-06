import React from 'react';
import { TaskCardProps } from 'types/task';
import { useTask } from 'hooks';

const TaskCard: React.FC<TaskCardProps> = ({ task, onUpdate }) => {
  const { borderColor, releaseColor } = useTask(task?.id);

  return (
    <div
      className={`bg-gray-100 py-2 px-4 rounded-r-xl border-l-[6px] space-y-1 border ${borderColor}`}
    >
      <div>
        <h1 className='text-h1 font-semibold md:tracking-wider text-gray-900'>
          {task?.title}
        </h1>
        <div className='text-h2 font-medium text-gray-600 tracking-wide'>
          {task?.description}
        </div>
      </div>
      <div className='w-full flex justify-end'>
        <div
          onClick={() => [onUpdate(task?.id), releaseColor()]}
          className='w-fit border border-gray-400 hover:text-blue-950 hover:border-blue-900 py-1 px-2 rounded-md text-h2 font-medium hover:font-semibold text-gray-700 cursor-pointer'
        >
          Done
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
