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
    return (
        <>
            <Navbar />
            <ThemeToggle />
            <div className="todo-container">
                <div className="todo-wrapper">
                    <div className="todo-header">
                        <h1>✓ Taskly</h1>
                        <p>Organize your day, one task at a time</p>
                    </div>
                    <Form onSubmit={handleSubmit} />
                    <ToDoList tasks={tasks} />
                </div>
            </div>
        </>
    )
}

export default TodoPage
