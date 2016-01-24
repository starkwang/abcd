import React from 'react';
export default class InputAddButton extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.actions.addInput();
    }

    render() {
        return (
            <button onClick={this.handleClick} > Add Input </button>
        );
    }
}