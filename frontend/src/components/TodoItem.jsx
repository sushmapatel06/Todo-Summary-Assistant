import React from 'react';

const TodoItem = ({ todo, onDelete }) => (
  <div className="border p-2 my-2 rounded flex justify-between items-center">
    <span>{todo.title}</span>
    <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => onDelete(todo.id)}>Delete</button>
  </div>
);

export default TodoItem;
