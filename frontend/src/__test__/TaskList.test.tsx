import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskList from 'templates/task/task-list';
import { Task } from 'types/task';
import '@testing-library/jest-dom';

const mockTasks: Task[] = [
  { id: 1, title: 'Title 1', description: 'Desc 1' },
  { id: 2, title: 'Title 2', description: 'Desc 2' },
];

describe('TaskList', () => {
  it('renders all task cards', () => {
    render(
      <TaskList
        data={mockTasks}
        onUpdate={jest.fn()}
      />
    );
    expect(screen.getByText('Title 1')).toBeInTheDocument();
    expect(screen.getByText('Title 2')).toBeInTheDocument();
  });

  it('calls onUpdate for the correct task when Done button is clicked', () => {
    const mockOnUpdate = jest.fn();
    render(
      <TaskList
        data={mockTasks}
        onUpdate={mockOnUpdate}
      />
    );
    fireEvent.click(screen.getAllByText('Done')[1]);
    expect(mockOnUpdate).toHaveBeenCalledWith(2);
  });
});
