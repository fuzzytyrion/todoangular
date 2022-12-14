using Microsoft.EntityFrameworkCore;

namespace api.Models
{
    public class TodoContext : DbContext
    {
        public TodoContext(DbContextOptions<TodoContext> options) : base(options) { }

        public virtual DbSet<Todo> Todos { get; set; }
    }
}