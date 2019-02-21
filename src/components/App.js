import React, { Component } from 'react';
import ToDoListTemplate from './ToDoListTemplate';
import ToDoItemList from './ToDoItemList';
import Form from './Form';

class App extends Component {
    constructor() {
        super();

        this.id = 0;
        this.state = {
            input: '',
            select: '',
            todos: []
        };
    }

    componentDidMount = () => {
        localStorage.hasOwnProperty("todos") && this.setState({
            todos: JSON.parse(localStorage.getItem('todos'))
        }, () => {
            this.id = this.state.todos.length;
        });
    }

    handleChange = ({ target: { value } }) => {
        this.setState({
            input: value
        });
    }

    handleSelect = ({ target: { value } }) => {
        this.setState({
            select: value
        });
    }

    handleCreate = () => {
        const { input, select, todos } = this.state;
        this.state.input && this.setState(
            {
                input: '',
                select: '',
                todos: todos.concat({
                    important: select,
                    text: input,
                    checked: false
                })
            }, () => {
                localStorage.setItem('todos', JSON.stringify(this.state.todos));
            });
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleCreate();
        }
    }

    handleToggle = (index) => {
        const { todos } = this.state;
        const selected = todos[index];
        const nextTodos = [...todos];

        nextTodos[index] = {
            ...selected,
            checked: !selected.checked
        };

        this.setState({
            todos: nextTodos
        }, () => {
            localStorage.setItem('todos', JSON.stringify(this.state.todos));
        });
    }

    handleRemove = (index) => {
        const { todos } = this.state;
        this.setState({
            // Index 제외
            todos: todos.filter((todo, id) => id !== index)
        }, () => {
            localStorage.setItem('todos', JSON.stringify(this.state.todos));
        });
    }

    render() {
        const { input, select, todos } = this.state;
        const {
            handleChange,
            handleSelect,
            handleCreate,
            handleKeyPress,
            handleToggle,
            handleRemove
        } = this;

        return (
            <ToDoListTemplate form={(
                <Form
                    value={input}
                    select={select}
                    onKeyPress={handleKeyPress}
                    onChange={handleChange}
                    onCreate={handleCreate}
                    onSelect={handleSelect}
                />
            )}>
                <ToDoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
            </ToDoListTemplate>
        );
    }
}

export default App;