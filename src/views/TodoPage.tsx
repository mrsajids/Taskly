import React, { useState } from 'react'
import ToDoList from '../components/ToDoList'
import Form from '../components/Form';
import Navbar from '../components/Navbar';
import ThemeToggle from '../components/ThemeToggle';
import '../styles/todoStyles.css';

const TodoPage = () => {
    const [tasks, setTasks] = useState<string[]>([]);
    const handleSubmit = (text: string) => {
        setTasks([...tasks, text])
    }
    const getGreeting = ():string => {
  const hour = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
    hour: "numeric",
    hour12: false,
  });

  const h = parseInt(hour);

  if (h < 12) return "Good Morning";
  if (h < 17) return "Good Afternoon";
  return "Good Evening";
};
    return (
        <>
            <Navbar />
            <div className="todo-container">
                <div className="todo-wrapper">
                    <div className="todo-header">
                      <h1>{getGreeting()}</h1>
<p>Turn your plans into progress — one task at a time.</p>
                    </div>
                    <Form onSubmit={handleSubmit} />
                    <ToDoList tasks={tasks} />
                </div>
            </div>
        </>
    )
}

export default TodoPage
