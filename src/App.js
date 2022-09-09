import './App.css';
import Form from './components/form/form';
import Header from './components/header/header';
import { useEffect, useState } from 'react';
import Tasks from './components/tasks/tasks';

function App() {

  const initialState = JSON.parse(localStorage.getItem("tasks")) || []

  const [inputValue, setInputValue] = useState("")

  const [tasks, setTasks] = useState(initialState)

  const [editTask, setEditTask] = useState(null)

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  return (
    <div>
      <Header/>
      <Form
        inputValue={inputValue}
        setInputValue={setInputValue}
        tasks={tasks}
        setTasks={setTasks}
        editTask={editTask}
        setEditTask={setEditTask}
      />
      <Tasks tasks={tasks} setTasks={setTasks} setEditTask={setEditTask}/>
    </div>
  );
}

export default App;
