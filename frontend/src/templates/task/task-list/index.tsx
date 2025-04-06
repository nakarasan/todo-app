import React from 'react';
import TaskCard from './card';
import { TaskListProps } from 'types/task';

const TaskList: React.FC<TaskListProps> = ({ data, onUpdate }) => {
  return (
    <div className='py-8 px-[6vw] space-y-6'>
      {data?.map((item: any, index: number) => (
        <div key={index}>
          <TaskCard
            task={item}
            onUpdate={onUpdate}
          />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
