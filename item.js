import React from "react";
class Item extends React.Component {
    constructor(props) {
        super(props);
        this.handlerStatusChange = this
            .handlerStatusChange
            .bind(this)
        this.deleteItem = this
            .deleteItem
            .bind(this)
        this.editItem = this
            .editItem
            .bind(this)
        this.updateItem = this
            .updateItem
            .bind(this)
        this.state = {
            needEdit:false
        }
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
    editItem(){
        this.setState({
            needEdit:true
        })
    }
    updateItem(){
        this.setState({
            needEdit: false
        })
        this.props.updateItem(this.props.index, this.refs.editInput.value)
    }
    render() {
                if(!this.state.needEdit){
                    return (
                        <li>
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
                            <button onClick={this.handlerStatusChange}> {this.props.status ? '完成了' : '未完成'} </button>
                            <button onClick={this.editItem}>编辑</button>
                        </li>
                    )
                }else{
                    return(
                        <li>
                            <input ref='editInput' type="text" defaultValue={this.props.title}/>
                            <button onClick={this.updateItem}>完成</button>
                        </li>
                    )
                }
    }
}

export default Item
