import { Component } from 'react';
import './StyleCss/TodoForm.css'

export class TodoForm extends Component {
    render() {
        return (
            <>
                <h1>Todos</h1>
                <input type="text" placeholder='Search'/>
            </>
        )
    }
}