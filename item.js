import React from "react";
class Item extends React.Component {
    constructor(props) {
        super(props);
        this.handlerStatusChange = this
            .handlerStatusChange
            .bind(this)
        super(props);
        this.deleteItem = this
            .deleteItem
            .bind(this)
    }
    handlerStatusChange() {
        console.log(this.props)
        let status = !this.props.status
        this
            .props
            .changeStatus(this.props.index, status)
    }
    deleteItem(event) {
        event.stopPropagation();
        event
            .nativeEvent
            .stopImmediatePropagation();
        this
            .props
            .deleteItem(this.props.index)
    }
    render() {
        return (
            <li onClick={this.handlerStatusChange}>
                <span>{this.props.index + 1}</span>
                <span>{this.props.title}</span>
                <span>
                    || {this.props.status
                        ? '完成'
                        : '待办'}
                </span>
                <p onClick={this.deleteItem}>
                    X
                </p>
            </li>
        );
    }
}

export default Item
