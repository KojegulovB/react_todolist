import React, { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';


function Form({ inputValue, setInputValue, tasks, setTasks, editTask ,setEditTask }) {

  const updateTask = (title, { id, completed }) => {

    const newTask = tasks.map((item) => item.id === id ? { title, id,completed } : item)

    setTasks(newTask)

    setEditTask("")
    
  }

  useEffect(() => {

    if(editTask){
      setInputValue(editTask.title)
    }else{
      setInputValue("")
    }

  }, [setInputValue, editTask])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(editTask){
      updateTask(inputValue, editTask)
    }else{
      setTasks([...tasks, {id: uuidv4(), title: inputValue, completed: false}])
      setInputValue("")
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="describe task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required
      />
      <button type="submit">{editTask ? "SAVE" : "ADD"}</button>
    </form>
  );
}

export default Form;
