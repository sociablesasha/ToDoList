import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoItemList extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;

        const todoList = todos.map(
            ({ important, text, checked }, id) => {
                return (
                    <ToDoItem
                        id={id}
                        important={important}
                        text={text}
                        checked={checked}
                        onToggle={onToggle}
                        onRemove={onRemove}
                        key={id}
                    />
                )
            }
        ).reverse();

        return (
            <div>
                {todoList}
            </div>
        );
    }
}


export default ToDoItemList;