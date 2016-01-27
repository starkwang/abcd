import React from 'react';
import Text from './Text';
import { DragSource ,DropTarget} from 'react-dnd';
const type = 'contact-item';
const itemSource = {
    beginDrag(props) {
        props.beginDrag(props.id,'contact');
        return {
            id : props.id
        };
    },
    endDrag(props, monitor) {
        props.endDrag(monitor.getItem().id,'contact');
    }
};
const itemTarget = {
    canDrop() {
        return false;
    },

    hover(props, monitor) {
        props.itemSort(monitor.getItem().id, props.id, 'contact');
    }
};

function sourceCollect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        //isDragging: monitor.isDragging()
    }
}

function targetCollect(connect) {
    return {
        connectDropTarget: connect.dropTarget()
    }
}

export default class Contact extends React.Component{
    constructor(props) {
        super(props);
        //this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        //this.props.actions.changeText();
    }

    render() {
        const { index, item, actions, isDragging, textEdit, enterEdit, connectDragSource, connectDropTarget } = this.props;
        const opacity = isDragging?'0.5':'1';
        return connectDropTarget(connectDragSource((
            <div className="contact-item" style={{opacity:opacity}}>
                <Text className="contact-name" name="contact-name" index={index} text={item.name.text} isEditting={item.name.isEditting} textEdit={textEdit} enterEdit={enterEdit} />
                <Text className="contact-value" name="contact-value" index={index} text={item.value.text} isEditting={item.value.isEditting} textEdit={textEdit} enterEdit={enterEdit} />                   
            </div>
        )));
    }
}

export default DropTarget(type, itemTarget, targetCollect)(DragSource(type, itemSource, sourceCollect)(Contact));