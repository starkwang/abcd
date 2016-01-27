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

export function beginDrag(id){
    return {
        type: 'BEGIN_DRAG',
        id: id
    }
}

export function endDrag(id){
    return {
        type: 'END_DRAG',
        id: id
    }
}

export function itemSort(sourceID, targetID){
    //console.log('itemSort',sourceIndex,targetIndex);
    return {
        type:'ITEM_SORT',
        sourceID:sourceID,
        targetID:targetID,
    }
}

export function textEdit(name, index){
    return {
        type: 'TEXT_EDIT',
        name: name,
        index: index
    }
}

export function enterEdit(name, index, value){
    return {
        type: 'ENTER_EDIT',
        name: name,
        index: index,
        value: value
    }
}