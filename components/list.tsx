import { setTodoStatus } from 'redux/slice/todo'
import { useAppSelector, useAppDispatch } from 'redux/hooks'

export interface ListI {}

export function List({}: ListI) {
  const dispatch = useAppDispatch()
  const todos = useAppSelector((state) => [
    ...state.todo.todos
  ])

  function updateTodoStatus(index: number, complete: boolean) {
    dispatch(setTodoStatus({ index, complete }))
  }

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
