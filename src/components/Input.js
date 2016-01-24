import React from 'react';
export default class Input extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        console.log(this.props);
        this.props.inputChange(event.target.value,this.props.index);
    }

    render() {
        return (
            <input onChange={this.handleChange}/>
        );
    }
}