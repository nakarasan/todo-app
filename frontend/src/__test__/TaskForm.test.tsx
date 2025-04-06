import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import TaskForm from 'templates/task/task-form';
import '@testing-library/jest-dom';

describe('TaskForm', () => {
  it('renders the form inputs', () => {
    render(<TaskForm onSubmit={jest.fn()} />);
    expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
  });

  // it('validates required fields', async () => {
  //   render(<TaskForm onSubmit={jest.fn()} />);
  //   fireEvent.click(screen.getByText('Add'));
  //   await waitFor(() => {
  //     expect(screen.getByText(/Title is required/i)).toBeInTheDocument();
  //     expect(screen.getByText(/Description is required/i)).toBeInTheDocument();
  //   });
  // });

  // it('validates required fields', async () => {
  //   const { container } = render(<TaskForm onSubmit={jest.fn()} />);
  //   fireEvent.click(screen.getByText('Add'));

  //   await waitFor(() => {
  //     // Log the container to inspect the rendered HTML structure
  //     console.log(container.innerHTML);

  //     // Now test for error messages
  //     expect(screen.getByText(/Title is required/i)).toBeInTheDocument();
  //     expect(screen.getByText(/Description is required/i)).toBeInTheDocument();
  //   });
  // });

  it('calls onSubmit with correct values', async () => {
    const mockOnSubmit = jest.fn();
    render(<TaskForm onSubmit={mockOnSubmit} />);

    fireEvent.change(screen.getByLabelText(/Title/i), {
      target: { value: 'New Task' },
    });
    fireEvent.change(screen.getByLabelText(/Description/i), {
      target: { value: 'Task description' },
    });

    fireEvent.click(screen.getByText('Add'));

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith(
        { title: 'New Task', description: 'Task description' },
        expect.any(Object)
      );
    });
  });
});
