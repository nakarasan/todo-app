namespace ToDo.Api.Shared.Models
{
    public class ResponseResult<TResult>
    {
        public IEnumerable<string> Errors { get; set; }
        public TResult Result { get; set; }
        public bool Succeeded { get; set; }

        public object Select(Func<object, object> p)
        {
            throw new NotImplementedException();
        }
    }
}
