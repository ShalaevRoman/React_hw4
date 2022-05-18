import { Component } from 'react';
import './StyleCss/TodoItem.css'

export class TodoItem extends Component {
    render() {
        return (<li
                    className={this.props.item.completed ? 'done' : 'default'}
                    onClick={() => this.props.onItemCompleted(this.props.item.id)}
                >
                    <h3>{this.props.item.title}</h3>
                    <p>{this.props.item.description}</p>
                </li>);
    }
}