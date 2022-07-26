import TodoType from 'types/todo'
import { addTodo, setTodoStatus } from 'redux/slice/todo'
import { useSelector, useDispatch } from 'react-redux'

export interface ListI {}

export function List({}: ListI) {
  const dispatch = useDispatch()
  const todos = useSelector((state: { todo: { todos: TodoType[] } }) => [
    ...state.todo.todos
  ])

  function updateTodoStatus(index: number, complete: boolean) {
    dispatch(setTodoStatus({ index, complete }))
  }

  console.log(todos)

  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <div
          className="todo-item"
          key={index}
          onClick={(e) => updateTodoStatus(index, !todo.complete)}
        >
          <p>{todo.task}</p>
          <a className={`cb ${todo.complete ? 'check' : ''}`} />
        </div>
      ))}
    </div>
  )
}

export default List
