import React from 'react'
import { Component } from 'react'
import { Provider } from 'mobx-react'

import { TodoStore } from './todoStore'
import { TodoAdd } from './todoAdd'
import { TodoList } from './todoList'

export class App extends Component {
    private todoStore: TodoStore = new TodoStore()
    test = ""

    render() {
        return (
            <Provider todoStore={this.todoStore}>
                <div>
                    <TodoAdd />
                    <TodoList />
                </div>
            </Provider>
        )
    }
}