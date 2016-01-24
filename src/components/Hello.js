import React from 'react';
export default class Hello extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.actions.changeText();
    }

    render() {
        return (
            <h1 onClick={this.handleClick} className="hello" > {this.props.text} </h1>
        );
    }
}