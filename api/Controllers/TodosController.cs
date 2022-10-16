using api.Models;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers;

[Route("api/{controller}")]
[ApiController]
public class TodosController : ControllerBase
{
    private readonly TodoContext _context;

    public TodosController(TodoContext context)
    {
        _context = context;
    }

    [HttpPut("{id}")]
    public async Task<ActionResult> PutTodo(int id, Todo updatedTodo)
    {
        var todo = await _context.Todos.FindAsync(id);

        if (todo == null)
            return NotFound();

        todo.Name = updatedTodo.Name;
        todo.Completed = updatedTodo.Completed;

        await _context.SaveChangesAsync(); 

        return NoContent();
    }

    [HttpPost]
    public async Task<ActionResult<Todo>> PostTodo(Todo todo)
    {
        _context.Todos.Add(todo);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetTodo), new { id = todo.Id }, todo);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Todo>> GetTodo(int id)
    {
        var todo = await _context.Todos.FindAsync(id);

        if (todo == null)
            return NotFound();

        return todo;
    }

    [HttpGet]
    public ActionResult<List<Todo>> GetTodos()
    {
        var todos = _context.Todos.Where(t => t.Completed == false).ToList();

        return todos;
    }
}