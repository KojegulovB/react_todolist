import React, { useEffect } from "react";
import "./tasks.css"

function Tasks({ tasks, setTasks, setEditTask, edit }) {
  const handleComplete = (id) => {
    setTasks(
      tasks.map((item) => item.id === id ? {...item, completed: !item.completed } : item ).sort((a, b) => a.completed - b.completed) 
    )
  }
  const handleDelete = (id) => {
    setTasks(tasks.filter(item => item.id !== id))
  }

  const handleEdit = (id) => {
    const findTask = tasks.find((item) => item.id === id)

    setEditTask(findTask)
  }


  return (
    <div>
      {tasks.map((item) => (
        <div key={item.id}>
          <span className={item.completed ? "completed-task" : ""}>{item.title}</span>
          <button onClick={() => handleEdit(item.id)}>edit</button>
          <button onClick={() => handleComplete(item.id)}>check</button>
          <button onClick={() => handleDelete(item.id)}>delete</button>
        </div>
      ))}
    </div>
  );
}

export default Tasks;
