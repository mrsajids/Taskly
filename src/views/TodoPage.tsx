import React, { useState } from 'react'
import ToDoList from '../components/ToDoList'
import Form from '../components/Form';

const TodoPage = () => {
    const [tasks, setTasks] = useState<[string]>(['']);
    const handleSubmit = (text: string) => {
        setTasks([text])
    }
    return (
        <div>
            <Form onSubmit={handleSubmit} />
            <ToDoList tasks={tasks} />
        </div>
    )
}

export default TodoPage
