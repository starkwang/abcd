import React from 'react';
import Input from '../components/Input';
export default class InputArea extends React.Component{
    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){
        //this.props.actions.buttonClick();
    }

    render() {
        var inputs = [];
        var _this = this;
        this.props.inputs.map((input, index) =>
            inputs.push(<Input index={index} key={index} inputChange={(text,index)=>{this.props.actions.inputChange(text,index)}}/>)
        )
        return (
            <div>
                {inputs}
            </div>
        );
    }
}