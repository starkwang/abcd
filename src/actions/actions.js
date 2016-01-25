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

export function itemSort(sourceIndex, sourceID, targetIndex, targetID){
    //console.log('itemSort',sourceIndex,targetIndex);
    return {
        type:'ITEM_SORT',
        sourceIndex:sourceIndex,
        sourceID:sourceID,

        targetIndex:targetIndex,
        targetID:targetID,
    }
}