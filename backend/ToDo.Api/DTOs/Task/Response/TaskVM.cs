namespace ToDo.Api.DTOs.Task.Response
{
    public class TaskVM
    {
        public required int Id { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
    }
}
