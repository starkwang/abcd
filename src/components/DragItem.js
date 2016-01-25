import React from 'react';
import { DragSource ,DropTarget} from 'react-dnd';

const type = 'item';
const itemSource = {
    beginDrag(props) {
        props.beginDrag(props.id);
        return {
            id : props.id
        };
    },
    endDrag(props, monitor) {
        props.endDrag(monitor.getItem().id);
    }
};
const itemTarget = {
    canDrop() {
        return false;
    },

    hover(props, monitor) {
        const { text: text } = monitor.getItem();
        props.itemSort(monitor.getItem().id, props.id);
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
        const opacity = isDragging=='true'?'0':'1';
        console.log(isDragging);
        return connectDropTarget(connectDragSource(
            <div style={{
                height:'50px',
                width:'auto',
                background:'#ddd',
                margin:'10px',
                //opacity:opacity
            }}> 
                {this.props.text} 
            </div>
        ));
    }
}

export default DropTarget(type, itemTarget, targetCollect)(DragSource(type, itemSource, sourceCollect)(DragItem));