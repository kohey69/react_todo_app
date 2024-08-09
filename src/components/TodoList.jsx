import { useState } from "react"

const TodoList = () => {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: 'タスク1',
      isCompleted: false
    },
    {
      id: 2,
      task: 'タスク2',
      isCompleted: false
    }
  ])

  const onSubmit = (e) => {
    e.preventDefault()
    const newId = todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1
    const newTodo = {id: newId, task, isCompleted: false}
    setTodos((prevTodos) => [...prevTodos, newTodo])
    setTask('')
  }
  const handleToggleComplete = (id) => {
    setTodos((prevTodos) =>{
      prevTodos.map((todo) => (todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo))
    })
  }

  return(
    <div>
      <h1>Todoリスト</h1>

      <form onSubmit={onSubmit}>
        <label htmlFor="task">やること</label>
        <input type="text" id="task" name="task" value={task} onChange={(e) => {
          setTask(e.target.value)
        }} />
        <button type="submit">追加</button>
      </form>

      <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <label>
            <input
              type='checkbox'
              checked={todo.isCompleted}
              onChange={() => handleToggleComplete(todo.id)}
            />
            <span className={todo.isCompleted ? StyleSheet.completed : ''}>{todo.task}</span>
          </label>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default TodoList
