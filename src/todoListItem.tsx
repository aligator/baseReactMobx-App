import React from 'react'

import { Todo } from './todoStore'

interface TodoListItemProps {
    todo: Todo
}

export const TodoListItem = ({ todo }: TodoListItemProps) => {
    return <div>{todo.task}</div>
}