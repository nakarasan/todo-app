using Microsoft.AspNetCore.Mvc;
using ToDo.Api.DTOs.Task.Request;
using ToDo.Api.Services.Task;

namespace ToDo.Controllers
{
    [ApiController]
    [Route("api/")]
    public class TaskController : ControllerBase
    {
        private readonly ITaskService _taskService;

        public TaskController(ITaskService taskService)
        {
            _taskService = taskService;
        }

        [HttpPost("tasks")]
        public async Task<IActionResult> CreatePaperAsync([FromBody] CreateTaskRequest request)
        {
            var result = await _taskService.CreateTaskAsync(request);
            return Ok(result);
        }

        [HttpPut("tasks/{id:int}")]
        public async Task<IActionResult> UpdateTaskAsync(int id)
        {
            var result = await _taskService.UpdateTaskAsync(id);
            return Ok(result);
        }

        [HttpGet("tasks")]
        public async Task<IActionResult> GetAllPapers()
        {
            var result = await _taskService.GetAllTasksAsync();
            return Ok(result);
        }
    }
}
