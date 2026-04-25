type Todo = {
    tasks: string[]
}
const ToDoList = ({ tasks=[] }: Todo) => {
    return (
        <div>
            <h3>Task List</h3>
            <hr />
            {
                tasks.length && <div>Total Tasks: {tasks.length}</div>
            }
            {
                tasks.length == 0 ? <div> No Tasks..</div> :
                    <ul>
                        {tasks.map((task: string,idx) => (
                            <li key={idx}>{task}</li>
                        ))}
                    </ul>
            }

        </div>
    )
}

export default ToDoList
