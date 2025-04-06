export interface TaskFormProps {
  onSubmit?: any;
}

export interface FormValues {
  title: string;
  description: string;
}

export interface Task {
  id: number;
  title: string;
  description: string;
}

export interface TaskListProps {
  data: Task[];
  onUpdate: (taskId: number) => void;
}

export interface TaskCardProps {
  task: Task;
  onUpdate: (taskId: number) => void;
}
