import React from 'react';
export default class Text extends React.Component{
    constructor(props) {
        super(props);
        this.textEdit = this.textEdit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.enterEdit = this.enterEdit.bind(this);
    }

    textEdit(){
        this.setState({
            value: this.props.text
        });
        this.props.textEdit(this.props.name, this.props.index);
    }

    enterEdit(){
        this.props.enterEdit(this.props.name, this.props.index, this.state.value);
    }

    onChange(e){
        this.setState({
            value:e.target.value
        });
    }

    render() {
        const { className, text, isEditting} = this.props;
        if(isEditting){
            return (
                <div className="text-wrapper">
                    <input defaultValue={text} className={className} onChange={this.onChange}/>
                    <button className={className} onClick={this.enterEdit}>确认</button>
                </div>
            );
        }else{
            return (
                <p className={className} onClick={this.textEdit} >{text}</p>
            );
        }
    }
}