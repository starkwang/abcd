import React from 'react';
import Contact from '../components/Contact';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class ContactCollection extends React.Component{
    constructor(props) {
        super(props);
        //this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        //this.props.actions.changeText();
    }

    render() {
        console.log(this.props.actions);
        var { itemSort, beginDrag, endDrag, textEdit, enterEdit} = this.props.actions;

        var contacts = [];
        this.props.contact.forEach((item, index)=>{
            contacts.push(
                <Contact key={index} index={index} item={item} id={item.id} isDragging={item.isDragging} textEdit={textEdit} enterEdit={enterEdit} itemSort={itemSort} beginDrag={beginDrag} endDrag={endDrag}/>
            )
        })
        return (
            <div className="contact">
                {contacts}
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(ContactCollection);