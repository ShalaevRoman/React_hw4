import { Component } from 'react';
import { TodoItem } from './TodoItem'

export class TodoList extends Component {
    state = {
        list: [
            {
                id: 1,
                title: 'Помыть полы',
                description: 'Мистер Пропер',
                completed: false,
                history: [{
                    field: '',
                    action: '',
                    prevValue: '',
                    currentValue: '',
                    appliedAt: '',
                }]
            },
            {
                id: 2,
                title: 'Помыть посуду',
                description: 'Фери',
                completed: false,
                history: [{
                    field: '',
                    action: '',
                    prevValue: '',
                    currentValue: '',
                    appliedAt: '',
                }]
            },
            {
                id: 3,
                title: 'Вытереть пыль',
                description: 'Мокрая тряпка',
                completed: false,
                history: [{
                    field: '',
                    action: '',
                    prevValue: '',
                    currentValue: '',
                    appliedAt: '',
                }]
            },
            {
                id: 4,
                title: 'Стирка',
                description: 'Порошок Tide',
                completed: false,
                history: [{
                    field: '',
                    action: '',
                    prevValue: '',
                    currentValue: '',
                    appliedAt: '',
                }]
            },
        ]
    }


    switchItemCompleted = (id) => {
        const item = this.state.list.find(todoItem => todoItem.id === id);
        const updatedItem = {...item, completed: !item.completed}

        this.setState({
            list: this.state.list.map(todoItem => todoItem.id === id ? updatedItem : todoItem)
        })
    }

    render() {
        return (
            <>
                <ul>
                    { this.state.list.map(todoItem =>
                        <TodoItem
                            key={todoItem.id}
                            item={todoItem}
                            onItemCompleted={this.switchItemCompleted}
                        />)
                    }
                </ul>
            </>
        )
    }
}