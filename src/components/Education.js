import React from 'react';
import Text from './Text';
export default class Education extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const { name, time, content } = this.props.item;
        const { textEdit, enterEdit } = this.props.actions;
        const { indexInMainInfo, index } = this.props;
        return (
            <div className="item">
                <Text className="name" text={name.text} isEditting={name.isEditting} textEdit={textEdit} enterEdit={enterEdit} location={['mainInfo',indexInMainInfo,'items',index,'name']}/>
                <Text className="time" text={time.text} isEditting={time.isEditting} textEdit={textEdit} enterEdit={enterEdit} location={['mainInfo',indexInMainInfo,'items',index,'time']}/>
                <Text className="content" text={content.text} isEditting={content.isEditting} textEdit={textEdit} enterEdit={enterEdit} location={['mainInfo',indexInMainInfo,'items',index,'major']}/>
            </div>
        );
    }
}