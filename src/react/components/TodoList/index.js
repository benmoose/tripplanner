/* @flow */
'use strict'

/*
 * Imports
 */

import React, { Componet } from 'react'
import TodoListItem from '../TodoListItem/'
import styles from './styles/todoList.scss'
import * as T from '../../types/'

/*
 * Component
 */

type Props = {
    todos: Array<T.Todo>,
}

export default function TodoList({todos}: Props) {
    const todoList = todos.map((todo, i) => {
        return <TodoListItem key={i} title={todo.title} completed={todo.completed}/>
    })

    return (
        <div>
            <ul>{todoList}</ul>
        </div>
    )
}
