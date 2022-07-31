import React, { Component } from 'react'

import './App.scss';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.scss'
import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter';
import TodoList from '../TodoList';
import ItemAddForm from '../ItemAddForm';


export default class App extends Component {

  randomId = Math.floor(Math.random() * 100000)

  state = {
    todoData: [
      {label: 'Drink Coffee', important: false, id: 1},
      {label: 'Build Awesome App', important: true, id: 2},
      {label: 'Have a lubch', important: false, id: 3},
    ]
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id)
      const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]

      return {
        todoData: newArr
      }
    })
  }

  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: this.randomId,
    }

    this.setState(({ todoData}) => {
      const newArr = [...todoData, newItem]

      return {
        todoData: newArr
      }
    })
  }

  render() {
    return (
      <div className="App">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex justify-content-between ">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
        todos={this.state.todoData}
        onDeleted={ this.deleteItem }/>

        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}
