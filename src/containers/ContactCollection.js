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
        var { itemSort, beginDrag, endDrag, textEdit, enterEdit, addContact} = this.props.actions;

        var contacts = [];
        this.props.contact.forEach((item, index)=>{
            contacts.push(
                <Contact key={index} index={index} location={['baseInfo','contact']} item={item} id={item.id} isDragging={item.isDragging} textEdit={textEdit} enterEdit={enterEdit} itemSort={itemSort} beginDrag={beginDrag} endDrag={endDrag}/>
            )
        })
        return (
            <div className="contact">
                {contacts}
                <button onClick={addContact}> + </button>
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(ContactCollection);