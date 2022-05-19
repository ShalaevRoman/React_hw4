import { Component } from 'react';
import './StyleCss/AddingTodos.css'

export class AddingTodos extends Component {
    render() {
        return (
            <form className="addingTodosFormWrapper">
                <input type="text" placeholder="what you need to do?"/>
                <button>+</button>
            </form>
        )
    }
}