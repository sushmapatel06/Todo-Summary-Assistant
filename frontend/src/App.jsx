import React, { useEffect, useState } from 'react';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const fetchTodos = async () => {
    const res = await fetch('http://localhost:8080/todos');
    const data = await res.json();
    setTodos(data);
  };

  const addTodo = async () => {
    if (!newTodo.trim()) return;
    await fetch('http://localhost:8080/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTodo, completed: false })
    });
    setNewTodo('');
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await fetch(`http://localhost:8080/todos/${id}`, { method: 'DELETE' });
    fetchTodos();
  };

  const summarize = async () => {
    const res = await fetch('http://localhost:8080/summarize', { method: 'POST' });
    const msg = await res.text();
    alert(msg);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-xl font-bold mb-4">Todo Summary Assistant</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="border p-2 flex-1"
          placeholder="New todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addTodo}>Add</button>
      </div>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
      ))}
      <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded w-full" onClick={summarize}>
        Summarize & Send to Slack
      </button>
    </div>
  );
}

export default App;
