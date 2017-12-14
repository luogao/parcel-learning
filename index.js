import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import './index.scss'
class HelloMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            borderValue: 1
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        console.log(this)
        this.setState({borderValue: event.target.value})
    }
    render() {
        return (
            <div>
                <input value={this.state.borderValue} type="range" onChange={this.handleChange} min="0" max="45" step="5"/>
                <div style={{clear:'both'}}></div>
                <h1 className={`border-${this.state.borderValue}`}>Hello {this.props.name}</h1>
            </div>
        );
    }
}

var mountNode = document.getElementById("app");
ReactDOM.render(
    <HelloMessage name="Sass"/>, mountNode);