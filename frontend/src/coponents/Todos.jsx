export function Todos({ todos }) {
  if (!todos) {
    return <p>No todos available</p>;
  }
  return todos.map(function (todo) {
    return (
      <div>
        <h1>{todo.title}</h1>
        <h2>{todo.description}</h2>
        <button style={{ margin: 10, padding: 10 }}>
          {todo.completed == true ? "Completed" : "Mark as Completed"}
        </button>
      </div>
    );
  });
}
