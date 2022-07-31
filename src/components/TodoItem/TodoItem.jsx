import React, { Component } from 'react'
import './TodoItem.scss'

export default class TodoItem extends Component {
	state = {
		done: false,
		important: false,
	}

	onLabelClick = () => {
		this.setState(({ done }) => {
			return {
				done: !done
			}
		})
	}

	onMarkImportant = () => {
		this.setState(({ important }) => {
			return {
				important: !important
			}
		})
	}

	render() {
		const { label, onDeleted } = this.props;
		const { done, important } = this.state

		let classNames = 'TodoItem d-flex justify-content-between align-items-center'
		if (done) {
			classNames += ' done'
		}

		if (important) {
			classNames += ' important'
		}

		return (
			<div className={classNames}>
				<span
					className="TodoItemLabel"
					onClick={ this.onLabelClick }
					>
						{label}
				</span>

				<div className="buttonGroup">
					<button
						className="btn btn-outline-success btn-sm"
						type="button"
						onClick={ this.onMarkImportant }
						>
						<i className="bi bi-exclamation-circle"></i>
					</button>

					<button
						className="btn btn-outline-danger btn-sm"
						type="button"
						onClick={ onDeleted }>
						<i className="bi bi-trash"></i>
					</button>
				</div>
			</div>
		)
	}
}
