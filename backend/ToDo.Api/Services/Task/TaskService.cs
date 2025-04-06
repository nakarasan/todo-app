using ToDo.Api.Data.Repositories.Task;
using ToDo.Api.DTOs.Task.Request;
using ToDo.Api.DTOs.Task.Response;
using ToDo.Api.Shared.Models;
using TaskModel = ToDo.Api.Models.ToDoTask;

namespace ToDo.Api.Services.Task
{
    public class TaskService : ITaskService
    {
        private readonly ITaskRepository _taskRepository;

        public TaskService(ITaskRepository taskRepository)
        {
            _taskRepository = taskRepository;
        }

        public async Task<ResponseResult<int>> CreateTaskAsync(CreateTaskRequest request)
        {
            var task = new TaskModel
            {
                Title = request.Title,
                Description = request.Description,
                CreatedAt = DateTime.Now,
                IsComplete = false
            };

            var taskId = await _taskRepository.CreateTaskAsync(task);

            return new ResponseResult<int>
            {
                Errors = null,
                Result = taskId,
                Succeeded = true
            };
        }

        public async Task<ResponseResult<List<TaskVM>>> GetAllTasksAsync()
        {
            var tasks = await _taskRepository.GetAllTasksAsync();

            return new ResponseResult<List<TaskVM>>
            {
                Errors = null,
                Result = tasks,
                Succeeded = true
            };
        }

        public async Task<ResponseResult<int>> UpdateTaskAsync(int id)
        {
            var task = await _taskRepository.GetTaskByIdAsync(id);

            if (task is null)
            {
                return new ResponseResult<int>
                {
                    Errors = ["Task not found."],
                    Result = 0,
                    Succeeded = false
                };
            }

            task.IsComplete = true;
            var updatedId = await _taskRepository.UpdateTaskAsync(task);

            return new ResponseResult<int>
            {
                Errors = null,
                Result = updatedId,
                Succeeded = true
            };
        }
    }
}
