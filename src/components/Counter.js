import React from 'react';

class Counter extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value : 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (e) {
        this.setState({
            value : this.state.value + 1
        })
    }

    render() {
        let fileName = "Counter.js";
        return (
            <div>
                <h3>fileName : {fileName}</h3>
                <h3>title : {this.props.title}</h3>
                <div>{this.state.value}</div>
                <button onClick={this.handleClick}>Press on</button>
            </div>
        )
    }
}

export default Counter;