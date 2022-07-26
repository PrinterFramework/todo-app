import Add from 'components/todo/add'
import List from 'components/todo/list'

export interface IndexI {}

export default function Index({}: IndexI) {
  return (
    <div className="container page center">
      <Add />
      <List />
    </div>
  )
}
