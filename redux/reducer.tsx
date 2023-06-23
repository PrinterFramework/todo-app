import { counterSlice } from 'redux/slice/counter'
import { todoSlice } from 'redux/slice/todo'

export const reducer = {
  counter: counterSlice.reducer,
  todo: todoSlice.reducer,
}
