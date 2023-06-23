import { createSlice } from '@reduxjs/toolkit'
import TodoType from 'types/todo'

export const todoInitialState = {
  // @printer::inject::todo[]
  todos: [] as TodoType[]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState: todoInitialState,
  reducers: {
    // @printer::inject
    addTodo(state, action) {
      state.todos = [
        ...state.todos,
        { task: action.payload, complete: false }
      ] as TodoType[]
    },
    // @printer::inject
    setTodoStatus(state, action) {
      state.todos[action.payload.index].complete =
        action.payload.complete || false
    }
  }
})

export const { addTodo, setTodoStatus } = todoSlice.actions