using Microsoft.EntityFrameworkCore;
using ToDo.Api.DTOs.Task.Response;
using TaskModel = ToDo.Api.Models.ToDoTask;

namespace ToDo.Api.Data.Repositories.Task
{
    public class TaskRepository : ITaskRepository
    {
        private readonly AppDbContext _dbContext;

        public TaskRepository(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<int> CreateTaskAsync(TaskModel task)
        {
            await _dbContext.Task.AddAsync(task);
            await _dbContext.SaveChangesAsync();
            return task.Id;
        }

        public async Task<List<TaskVM>> GetAllTasksAsync()
        {
            return await _dbContext.Task
                .Where(task => !task.IsComplete)
                .OrderByDescending(task => task.CreatedAt)
                .Take(5)
                .Select(task => new TaskVM
                {
                    Id = task.Id,
                    Title = task.Title,
                    Description = task.Description,
                })
                .ToListAsync();
        }

        public async Task<TaskModel?> GetTaskByIdAsync(int id)
        {
            return await _dbContext.Task.FindAsync(id);
        }

        public async Task<int> UpdateTaskAsync(TaskModel task)
        {
            _dbContext.Task.Update(task);
            await _dbContext.SaveChangesAsync();
            return task.Id;
        }
    }
}
