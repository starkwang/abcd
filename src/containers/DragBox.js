import React from 'react';
import DragItem from '../components/DragItem';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class DragBox extends React.Component{
    constructor(props) {
        super(props);
        //this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        //this.props.actions.changeText();
    }

    // findItem(key){
    //     var resultIndex;
    //     this.props.dragItems.forEach((item,index) => {
    //         if(item.key == key){
    //             resultIndex = item.index;
    //         }
    //     })
    //     return resultIndex;
    // }

    render() {
        var { itemSort, beginDrag, endDrag} = this.props.actions;
        var items = [];
        //var _this = this;
        this.props.dragItems.forEach((item,index) => {
            items.push(<DragItem text={item.text} isDragging={item.isDragging} index={index} key={index} id={item.id} itemSort={itemSort} beginDrag={beginDrag} endDrag={endDrag}/>)
        })
        return (
            <div>
                {items}
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(DragBox);