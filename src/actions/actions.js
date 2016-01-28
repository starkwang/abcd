export function changeText(){
    return {
        type:'CHANGE_TEXT'
    }
}

export function buttonClick(){
    return {
        type:'BUTTON_CLICK'
    }
}

export function addInput(){
    return {
        type:'ADD_INPUT'
    }
}

export function inputChange(text,index){
    return {
        type:'INPUT_CHANGE',
        text:text,
        index:index
    }
}

export function beginDrag(id, location){
    return {
        type: 'BEGIN_DRAG',
        id: id,
        location: location
    }
}

export function endDrag(id, location){
    return {
        type: 'END_DRAG',
        id: id,
        location: location
    }
}

export function itemSort(sourceID, targetID, location){
    //console.log('itemSort',sourceIndex,targetIndex);
    return {
        type:'ITEM_SORT',
        sourceID:sourceID,
        targetID:targetID,
        location: location
    }
}

export function textEdit(location){
    return {
        type: 'TEXT_EDIT',
        location: location,
    }
}

export function enterEdit(location, value){
    return {
        type: 'ENTER_EDIT',
        location: location,
        value: value
    }
}