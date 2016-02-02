import React from 'react';
import Text from './Text';
import { DragSource ,DropTarget} from 'react-dnd';

const type = 'skill-item';
const itemSource = {
    beginDrag(props) {
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

class Skill extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const { text, isEditting } = this.props.item;
        const { textEdit, enterEdit } = this.props.actions;
        const { indexInMainInfo, index, connectDragSource, connectDropTarget, location } = this.props;
        return connectDropTarget(connectDragSource((
            <li className="item">
                <Text className="text" text={text} isEditting={isEditting} textEdit={textEdit} enterEdit={enterEdit} location={['mainInfo',indexInMainInfo,'items',index]}/>
            </li>
        )));
    }
}

export default DropTarget(type, itemTarget, targetCollect)(DragSource(type, itemSource, sourceCollect)(Skill));