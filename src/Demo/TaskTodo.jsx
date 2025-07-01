import React, { useEffect } from "react";
import { useState } from "react";

function TaskTodo() {
  const currentTodo = localStorage.getItem("todoList");

  const parsedString = currentTodo ? JSON.parse(currentTodo) : [];

  const [totoList, setTodolist] = useState(parsedString);

  const [formData, setFormData] = useState({
    title: "",
    completed: false,
    createdAt: new Date(),
  });
  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(totoList));
  }, [totoList]);

  const handelSubmit = (e) => {
    e.preventDefault();
    setTodolist((pre) => [...pre, formData]);

    setFormData({
      title: "",
      completed: false,
      createdAt: new Date(),
    });
  };

  const deleteTodo = (deletedIndex) => {
    setTodolist((prev) => prev.filter((item, index) => index != deletedIndex));
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="enter the title"
          name="title"
          value={formData.title}
          onChange={handelChange}
        />

        <button type="submit"> Add Todo</button>
      </form>

      {totoList.length > 0 && (
        <>
          {totoList.map((item, index) => (
            <div key={index}>
              <h2>{item.title}</h2>
              <p>{item.completed ? "Completed" : "Pending"}</p>

              <button onClick={() => deleteTodo(index)}>Delete Item</button>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default TaskTodo;
