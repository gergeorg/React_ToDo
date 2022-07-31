import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import  './TodoList.scss'

const TodoList = ({ todos, onDeleted }) => {

	const elem = todos.map((item) => {

		const { id, ...itemProps } = item

		return (
			<li className="list-group-item" key={id}>
				<TodoItem {...itemProps}
				onDeleted={() => onDeleted(id)}
				/>
			</li>
		)
	})

  return (
    <ul className="list-group TodoList">
      { elem }
    </ul>
  )
}

export default TodoList
