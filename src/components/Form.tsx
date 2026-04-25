import React from 'react'

const Form = ({onSubmit }:any) => {
    const [text, setText] = React.useState<string>('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // log data to console
        onSubmit(text)
        setText('');
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Task' value={text} onChange={(e) => setText(e.target.value)} />
                <button type='submit'>Add Task</button>

            </form>
        </>
    )
}

export default Form
