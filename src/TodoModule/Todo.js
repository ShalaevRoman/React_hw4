import { Component } from 'react';
import {TodoForm} from "./components/TodoForm";
import {TodoList} from "./components/TodoList";
import {AddingTodos} from "./components/AddingTodos";
import './Todo.css';

export class Todo extends Component {
    render() {
        return (
            <div className='todoWrapper'>
                <TodoForm />
                <TodoList />
                <AddingTodos/>
            </div>
        );
    }
}