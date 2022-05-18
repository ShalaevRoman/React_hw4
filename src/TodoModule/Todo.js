import { Component } from 'react';
import {TodoForm} from "./components/TodoForm";
import {TodoList} from "./components/TodoList";
import './Todo.css'

export class Todo extends Component {
    render() {
        return (
            <div className='todoWrapper'>
                <TodoForm />
                <TodoList />
            </div>
        );
    }
}