import TodoType from 'types/todo'
import { addTodo, setTodoStatus } from 'redux/slice/todo'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

export interface AddI {}

export function Add({}: AddI) {
  const dispatch = useDispatch()
  const todos = useSelector((state: { todo: { todos: TodoType[] } }) => [
    ...state.todo.todos
  ])

  const [task, setTask] = useState('')

  function addNewTodo() {
    dispatch(addTodo(task))
    setTask('')
  }

  return (
    <div className="add-todo">
      <p>Add a new task</p>
      <input
        type="text"
        placeholder="Type in a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <a className="button" onClick={() => addNewTodo()}>
        Add Task
      </a>
    </div>
  )
}

export default Add
