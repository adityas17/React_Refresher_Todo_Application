import React from 'react'
import TodoItem from './TodoItem'

export function Todos(props) {
  return (
    <div>
      {props.todos.length === 0 ? "No Todos to display" :
        props.todos.map((todo) => {
          return (<TodoItem todo={todo} onDelete={props.onDelete} onUpdate = {props.onUpdate} />)
        })
      }
    </div>
  )
}

export default Todos
