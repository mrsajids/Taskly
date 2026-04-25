type Todo={
    tasks:string[]
} 
const ToDoList = ({tasks}:Todo) => {
  return (
    <div>
    <h3>Task List</h3>
    <hr />
      {tasks.length?tasks.map((task:any) => (
        <div key={task}>{task}</div>
      )):<div>No Tasks</div>}
    </div>
  )
}

export default ToDoList
