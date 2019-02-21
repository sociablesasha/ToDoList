import React, { Component } from 'react';
import './ToDoItem.css';

class ToDoItem extends Component {
    render() {
        const { important, text, checked, id, onToggle, onRemove } = this.props;

        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation();
                    onRemove(id)
                }
                }>&times;</div>
                <div className={`todo-content ${checked && 'checked'}`}>
                    <div className="todo-important">{important}</div>
                    <div className="todo-text">{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div >
        );
    }
}

export default ToDoItem;