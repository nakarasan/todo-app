using Microsoft.EntityFrameworkCore;
using ToDo.Api.Data;
using ToDo.Api.Data.Repositories.Task;
using ToDo.Api.Services.Task;

var builder = WebApplication.CreateBuilder(args);

// CORS setup
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader());
});

// Database connection setup
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString))
);

// Register services and repositories
builder.Services.AddScoped<ITaskService, TaskService>();
builder.Services.AddScoped<ITaskRepository, TaskRepository>();

// Add controllers and Swagger
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Apply migrations automatically at startup
using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    dbContext.Database.Migrate(); // This will apply any pending migrations
}

// Apply CORS policy
app.UseCors("AllowAll");

// Enable Swagger in development
// if (app.Environment.IsDevelopment())
// {
//     app.UseSwagger();
//     app.UseSwaggerUI(c =>
//     {
//         c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
//     });
//     app.UseDeveloperExceptionPage();
// }

app.UseSwagger();
app.UseSwaggerUI();

app.MapGet("/", () => "Hello World!");

// Configure middleware
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers(); // Enable this to ensure your controllers are mapped

// Configure Kestrel to listen on port 8000 and all interfaces
app.Urls.Add("http://0.0.0.0:8000");

app.Run();
