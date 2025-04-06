using Microsoft.EntityFrameworkCore;
using System.Reflection;
using ToDo.Api.Models;

namespace ToDo.Api.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        public DbSet<ToDoTask> Task { get; set; }

  /*      protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ToDo.ApiTask>()
                        .HasKey(t => t.Id);
            base.OnModelCreating(modelBuilder);
        }*/
    }
}

