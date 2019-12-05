import React from 'react'
import { Component } from 'react'
import { computed } from 'mobx'
import { observer, inject } from 'mobx-react'

import { TodoStore } from './todoStore'
import { TodoListItem } from './todoListItem'

interface TodoListProps {
    todoStore?: TodoStore
}

@inject('todoStore')
@observer
export class TodoList extends Component<TodoListProps> {
    @computed 
    get todoList() {
        return this.props.todoStore.todoList
    }

    render() {
        return (
            <>
                {this.props.todoStore.todoList.map((todo, idx) => (
                    <TodoListItem key={idx} todo={todo} />
                ))}
            </>
        )
    }
}