import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import './index.scss'
class HelloMessage extends React.Component {
    render() {
        return (
            <div><h1>Hello {this.props.name}</h1></div>
        );
    }
}

var mountNode = document.getElementById("app");
ReactDOM.render(
    <HelloMessage name="Roy"/>, mountNode);