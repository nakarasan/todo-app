import { COLORS } from 'constants/task';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  storeTaskRequested,
  updateTaskRequested,
  loadTasksRequested,
} from 'store/task/taskSlice';

const colorMap: Record<string, string> = {};

export function useTask(taskId: number) {
  const [color, setColor] = useState('');

  useEffect(() => {
    if (!taskId) return;

    if (!colorMap[taskId]) {
      const used = Object?.values(colorMap);
      const available =
        COLORS.find((c: any) => !used.includes(c)) ||
        COLORS[Math.floor(Math.random() * COLORS.length)];
      colorMap[taskId] = available;
    }

    setColor(colorMap[taskId]);
  }, [taskId]);

  const releaseColor = () => {
    delete colorMap[taskId];
  };
  return { borderColor: color, releaseColor };
}

export function useStoreTask() {
  const dispatch = useDispatch();
  const onStoreTask = useCallback(
    async (values: any) => {
      await dispatch(storeTaskRequested(values));
    },
    [dispatch]
  );
  return { onStoreTask };
}

export function useUpdateTask() {
  const dispatch = useDispatch();
  const onUpdateTask = useCallback(
    async (values: any) => {
      await dispatch(updateTaskRequested(values));
    },
    [dispatch]
  );
  return { onUpdateTask };
}

export function useLoadTasks() {
  const dispatch = useDispatch();
  const onLoadTasks = useCallback(async () => {
    await dispatch(loadTasksRequested({}));
  }, [dispatch]);

  useEffect(() => {
    onLoadTasks();
  }, [onLoadTasks]);
  return { onLoadTasks };
}
