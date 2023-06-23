'use client'

import Add from "components/add"
import List from "components/list"

export default function RootPage() {
  return (
    <section className="container page center">
      <Add />
      <List />
    </section>
  )
}
