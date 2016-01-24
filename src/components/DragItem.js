import React from 'react';
import { DragSource ,DropTarget} from 'react-dnd';

const type = 'item';
const itemSource = {
    beginDrag(props) {
        console.log(props.text,props.index)
        return {
            text : props.text,
            index : props.index
        };
    }
};
const itemTarget = {
    canDrop() {
        return false;
    },

    hover(props, monitor) {
        console.log('hover!!!');
        const { text: text } = monitor.getItem();
        console.log(text,props);
        //const { index: overId } = props;

        // if (draggedId !== overId) {
        //     const { index: overIndex } = props.findCard(overId);
        //     props.moveCard(draggedId, overIndex);
        // }
    }
};

function sourceCollect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

function targetCollect(connect) {
    return {
        connectDropTarget: connect.dropTarget()
    }
}

class DragItem extends React.Component{
    constructor(props) {
        super(props);
        //this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        //this.props.actions.changeText();
    }

    render() {
        const { connectDragSource, isDragging ,connectDropTarget} = this.props;
        const opacity = this.props.isDragging?'0':'1';
        return connectDropTarget(connectDragSource(
            <div style={{
                height:'50px',
                width:'auto',
                background:'#ddd',
                margin:'10px',
                opacity:opacity
            }}> 
                {this.props.text} 
            </div>
        ));
    }
}

export default DropTarget(type, itemTarget, targetCollect)(DragSource(type, itemSource, sourceCollect)(DragItem));