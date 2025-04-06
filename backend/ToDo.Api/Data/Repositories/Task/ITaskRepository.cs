using ToDo.Api.DTOs.Task.Response;
using TaskModel = ToDo.Api.Models.ToDoTask;

namespace ToDo.Api.Data.Repositories.Task
{
    public interface ITaskRepository
    {
        Task<int> CreateTaskAsync(TaskModel task);
        Task<List<TaskVM>> GetAllTasksAsync();
        Task<TaskModel?> GetTaskByIdAsync(int id);
        Task<int> UpdateTaskAsync(TaskModel task);
    }
}
