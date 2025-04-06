using System.ComponentModel.DataAnnotations;

namespace ToDo.Api.Models
{
    public class ToDoTask
    {
        [Key]
        public int Id { get; set; }
        public required string Title { get; set; }
        public required string Description { get; set; }
        public required bool IsComplete { get; set; }
        public DateTime? CreatedAt { get; set; }
    }
}
