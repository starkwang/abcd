import React from 'react';
import Text from './Text';
import { DragSource ,DropTarget } from 'react-dnd';

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
    }
}

function targetCollect(connect) {
    return {
        connectDropTarget: connect.dropTarget()
    }
}

class MainInfoItem extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const { type, item, index, indexInMainInfo } = this.props;
        const { textEdit, enterEdit } = this.props.actions;
        const { connectDragSource, connectDropTarget } = this.props;
        switch(type){
            case 'education':
            case 'practice':
                return connectDropTarget(connectDragSource((
                    <div className="item isDraggable">
                        <Text className="name" text={item.name.text} isEditting={item.name.isEditting} textEdit={textEdit} enterEdit={enterEdit} location={['mainInfo',indexInMainInfo,'items',index,'name']}/>
                        <Text className="time" text={item.time.text} isEditting={item.time.isEditting} textEdit={textEdit} enterEdit={enterEdit} location={['mainInfo',indexInMainInfo,'items',index,'time']}/>
                        <Text className="content" text={item.content.text} isEditting={item.content.isEditting} textEdit={textEdit} enterEdit={enterEdit} location={['mainInfo',indexInMainInfo,'items',index,'content']}/>
                    </div>
                )));

        }
        // const { text, isEditting } = this.props.item;
        // const { textEdit, enterEdit } = this.props.actions;
        // const { indexInMainInfo, index, connectDragSource, connectDropTarget, location, isDragging } = this.props;
        // const opacity = isDragging?'0.5':'1';
        // return connectDropTarget(connectDragSource((
        //     <li className="item isDraggable" style={{opacity:opacity}}>
        //         <Text className="text" text={text} isEditting={isEditting} textEdit={textEdit} enterEdit={enterEdit} location={['mainInfo',indexInMainInfo,'items',index]}/>
        //     </li>
        // )));
    }
}

export default function DraggableItemConstroctor(type){
    return DropTarget(type, itemTarget, targetCollect)(DragSource(type, itemSource, sourceCollect)(MainInfoItem));
}