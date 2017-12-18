import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import './index.scss'
import myStore from './stroage'
import Item from './Item'
class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: myStore.fetch() || []
        };
        this.addItem = this
            .addItem
            .bind(this)
        this.changeStatus = this
            .changeStatus
            .bind(this)
        this.deleteItem = this
            .deleteItem
            .bind(this)
        this.updateItem = this
            .updateItem
            .bind(this)
    }
    addItem(event) {
        if (event.keyCode === 13) {
            let value = event.target.value && event
                .target
                .value
                .trim()
            if (!value) {
                return
            }
            let tempItem = {
                id: myStore
                    .fetch()
                    .length + 1,
                title: value,
                status: false
            }
            this
                .state
                .todos
                .push(tempItem)
            myStore.save(this.state.todos);
            this.setState({
                todos: myStore.fetch()
            })
            event.target.value = null;
        }
    }
    changeStatus(index, status) {
        this.state.todos[index].status = status
        this.setState({todos: this.state.todos})
        myStore.save(this.state.todos);
    }
    deleteItem(index) {
        this
            .state
            .todos
            .splice(index, 1)
        this.setState({todos: this.state.todos})
        myStore.save(this.state.todos);
    }
    updateItem(index,value) {
        this
            .state
            .todos[index].title = value
        this.setState({todos: this.state.todos})
        myStore.save(this.state.todos);
    }

    render() {
        return (
            <div>
                <h2>TodoList</h2>
                <input type="text" onKeyUp={this.addItem}/>
                <ul>
                    {this
                        .state
                        .todos
                        .map((todo, index) => {
                            return <Item
                                key={index}
                                {...todo}
                                index={index}
                                changeStatus={this.changeStatus}
                                deleteItem={this.deleteItem}
                                updateItem={this.updateItem}/>
                        })
}
                </ul>
            </div>
        );
    }
}

var mountNode = document.getElementById("app");
ReactDOM.render(
    <Todo/>, mountNode);