import React from 'react';
import { useSelector } from 'react-redux';
import { useLoadTasks, useStoreTask, useUpdateTask } from 'hooks';
import { RootState } from 'store';
import TaskForm from 'templates/task/task-form';
import TaskList from 'templates/task/task-list';

const Task: React.FC = () => {
  const { onLoadTasks } = useLoadTasks();
  const { tasks } = useSelector((state: RootState) => state.task);
  const { onUpdateTask } = useUpdateTask();
  const { onStoreTask } = useStoreTask();

  return (
    <div className='md:min-h-screen flex flex-col md:flex-row font-poppins'>
      <div className='basis-[50%] border-r-2 border-slate-200 bg-slate-50'>
        <TaskForm onSubmit={onStoreTask} />
      </div>
      <div className='basis-[50%] md:max-h-screen overflow-y-auto'>
        <TaskList
          data={tasks}
          onUpdate={onUpdateTask}
        />
      </div>
    </div>
  );
};

export default Task;
