import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskCard from 'templates/task/task-list/card';
import { Task } from 'types/task';
import '@testing-library/jest-dom';

const mockTask: Task = {
  id: 1,
  title: 'Test Title',
  description: 'Test Description',
};

describe('TaskCard', () => {
  it('renders task title and description', () => {
    render(
      <TaskCard
        task={mockTask}
        onUpdate={jest.fn()}
      />
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('calls onUpdate with correct task id when button is clicked', () => {
    const mockOnUpdate = jest.fn();
    render(
      <TaskCard
        task={mockTask}
        onUpdate={mockOnUpdate}
      />
    );
    fireEvent.click(screen.getByText('Done'));
    expect(mockOnUpdate).toHaveBeenCalledWith(1);
  });
});
