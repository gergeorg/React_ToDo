import React, { Component } from 'react'
import './ItemStatusFilter.scss'

export default class TodoItem extends Component {
	render() {
		return (
			<div className="btn-group">
				<button type="button" className="btn btn-info">All</button>
				<button type="button" className="btn btn-outline-secondary">Active</button>
				<button type="button" className="btn btn-outline-secondary">Done</button>
			</div>
		)
	}
}

// const ItemStatusFilter = () => {
// 	return (
// 		<div className="btn-group">
// 			<button type="button" className="btn btn-info">All</button>
// 			<button type="button" className="btn btn-outline-secondary">Active</button>
// 			<button type="button" className="btn btn-outline-secondary">Done</button>
// 		</div>
// 	)
// }

// export default ItemStatusFilter