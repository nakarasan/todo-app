using Moq;
using ToDo.Api.Data.Repositories.Task;
using ToDo.Api.DTOs.Task.Request;
using ToDo.Api.DTOs.Task.Response;
using ToDo.Api.Models;
using ToDo.Api.Services.Task;

namespace ToDo.Tests.Services
{
    public class TaskServiceTests
    {
        private readonly Mock<ITaskRepository> _taskRepositoryMock;
        private readonly TaskService _taskService;

        public TaskServiceTests()
        {
            _taskRepositoryMock = new Mock<ITaskRepository>();
            _taskService = new TaskService(_taskRepositoryMock.Object);
        }

        [Fact]
        public async Task CreateTaskAsync_ShouldReturnSuccessResult()
        {
            // Arrange
            var request = new CreateTaskRequest
            {
                Title = "Test Task",
                Description = "Test Description"
            };

            _taskRepositoryMock
                .Setup(repo => repo.CreateTaskAsync(It.IsAny<ToDoTask>()))
                .ReturnsAsync(1);

            // Act
            var result = await _taskService.CreateTaskAsync(request);

            // Assert
            Assert.True(result.Succeeded);
            Assert.Equal(1, result.Result);
            Assert.Null(result.Errors);
        }

        [Fact]
        public async Task GetAllTasksAsync_ShouldReturnTaskList()
        {
            // Arrange
            var tasks = new List<TaskVM>
            {
                new TaskVM { Id = 1, Title = "Task 1", Description = "Desc 1" },
                new TaskVM { Id = 2, Title = "Task 2", Description = "Desc 2" }
            };

            _taskRepositoryMock
                .Setup(repo => repo.GetAllTasksAsync())
                .ReturnsAsync(tasks);

            // Act
            var result = await _taskService.GetAllTasksAsync();

            // Assert
            Assert.True(result.Succeeded);
            Assert.Equal(2, result.Result.Count);
        }

        [Fact]
        public async Task UpdateTaskAsync_WhenTaskExists_ShouldReturnUpdatedId()
        {
            // Arrange
            var existingTask = new ToDoTask
            {
                Id = 1,
                Title = "Sample Task",
                Description = "Sample Description",
                IsComplete = false
            };

            _taskRepositoryMock
                .Setup(repo => repo.GetTaskByIdAsync(1))
                .ReturnsAsync(existingTask);

            _taskRepositoryMock
                .Setup(repo => repo.UpdateTaskAsync(existingTask))
                .ReturnsAsync(existingTask.Id);

            // Act
            var result = await _taskService.UpdateTaskAsync(1);

            // Assert
            Assert.True(result.Succeeded);
            Assert.Equal(1, result.Result);
            Assert.Null(result.Errors);
        }

        [Fact]
        public async Task UpdateTaskAsync_WhenTaskDoesNotExist_ShouldReturnError()
        {
            // Arrange
            _taskRepositoryMock
                .Setup(repo => repo.GetTaskByIdAsync(It.IsAny<int>()))
                .ReturnsAsync((ToDoTask)null!);

            // Act
            var result = await _taskService.UpdateTaskAsync(999);

            // Assert
            Assert.False(result.Succeeded);
            Assert.Equal(0, result.Result);
            Assert.Contains("Task not found.", result.Errors);
        }
    }
}
