import React, { Component } from 'react'
import './ItemAddForm.scss'

export default class ItemAddForm extends Component {
	render() {
		return (
			<div className="ItemAddForm d-grid gap-2 col-6 mx-auto">
				<button
					className="btn btn-outline-secondary btn-lg"
					onClick={() => this.props.onItemAdded('Hello')}
					>Add Item</button>
			</div>
		)
	}
}
