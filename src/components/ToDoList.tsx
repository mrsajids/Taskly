type Todo = {
    tasks: string[]
}
const ToDoList = ({ tasks=[] }: Todo) => {
    return (
        <div className="todo-list-section">
            <div className="task-header">
                <h3>Task List</h3>
                {tasks.length > 0 && <span className="task-count">Total: {tasks.length}</span>}
            </div>
            {
                tasks.length == 0 ? 
                    <div className="empty-state">
                        <div className="empty-state-icon">📝</div>
                        <p className="empty-state-text">No tasks yet. Add one to get started!</p>
                    </div>
                    :
                    <ul className="tasks-list">
                        {tasks.map((task: string, idx) => (
                            <li key={idx} className="task-item">
                                <span className="task-item-number">{idx + 1}</span>
                                <span className="task-item-text">{task}</span>
                            </li>
                        ))}
                    </ul>
            }
        </div>
    )
}

export default ToDoList
