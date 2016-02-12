import React from 'react';
import Text from './Text';
import { DragSource ,DropTarget } from 'react-dnd';

const type = 'practice-item';
const itemSource = {
    beginDrag(props) {
        console.log(props);
        props.beginDrag(props.id,props.location);
        return {
            id : props.id
        };
    },
    endDrag(props, monitor) {
        props.endDrag(monitor.getItem().id,props.location);
    }
};
const itemTarget = {
    canDrop() {
        return false;
    },

    hover(props, monitor) {
        props.itemSort(monitor.getItem().id, props.id, props.location);
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

class Practice extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const { name, time, content } = this.props.item;
        const { textEdit, enterEdit } = this.props.actions;
        const { indexInMainInfo, index, connectDragSource, connectDropTarget, location } = this.props;
        return connectDropTarget(connectDragSource((
            <div className="item isDraggable">
                <Text className="name" text={name.text} isEditting={name.isEditting} textEdit={textEdit} enterEdit={enterEdit} location={['mainInfo',indexInMainInfo,'items',index,'name']}/>
                <Text className="time" text={time.text} isEditting={time.isEditting} textEdit={textEdit} enterEdit={enterEdit} location={['mainInfo',indexInMainInfo,'items',index,'time']}/>
                <Text className="content" text={content.text} isEditting={content.isEditting} textEdit={textEdit} enterEdit={enterEdit} location={['mainInfo',indexInMainInfo,'items',index,'content']}/>
            </div>
        )));
    }
}

export default DropTarget(type, itemTarget, targetCollect)(DragSource(type, itemSource, sourceCollect)(Practice));