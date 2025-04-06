using ToDo.Api.DTOs.Task.Request;
using ToDo.Api.DTOs.Task.Response;
using ToDo.Api.Shared.Models;

namespace ToDo.Api.Services.Task
{
    public interface ITaskService
    {
        Task<ResponseResult<List<TaskVM>>> GetAllTasksAsync();
        Task<ResponseResult<int>> CreateTaskAsync(CreateTaskRequest request);
        Task<ResponseResult<int>> UpdateTaskAsync(int id);
    }
}
