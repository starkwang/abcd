const initialState = {
    text: 'Hello',
    inputs:[{
        content:'123'
    }],
    items:[{
        text:'aaaaaaaaaaa',
        id:'key-a',
        isDragging:'false'
    },{
        text:'bbbbbbbbbbb',
        id:'key-b',
        isDragging:'false'
    },{
        text:'ccccccccccc',
        id:'key-c',
        isDragging:'false'
    }]
}

function findItem(items, id){
    var resultIndex;
    items.forEach((item,index) => {
        if(item.id == id){
            resultIndex = index;
        }
    });
    return resultIndex
}

export default function todoApp(state = initialState, action) {
    //console.log(state);
    switch (action.type) {
        case 'CHANGE_TEXT':
            return Object.assign({},state,{
                text:state.text=='Hello'?'Stark':'Hello'
            })
        case 'BUTTON_CLICK':
            return Object.assign({},state,{
                text: 'You just click button'
            })
        case 'ADD_INPUT':
            return Object.assign({},state,{
                inputs: [
                    ...state.inputs,
                    {
                        content:''
                    }
                ]
            })
        case 'INPUT_CHANGE':
            var newState = Object.assign({},state,{
                text:action.text
            });
            console.log(newState);
            newState.inputs[action.index].content = action.text;
            return newState;
        case 'ITEM_SORT':
            const {sourceID,targetID} = action;
            if(sourceID == targetID){
                return Object.assign({},state);
            }else{
                var sourceIndex = findItem(state.items, sourceID);
                var targetIndex = findItem(state.items, targetID);

                var clone = state.items.slice(0,state.items.length);   
                var movingItem = clone.splice(sourceIndex,1)[0];

                return Object.assign({},state,{
                    items:[
                        ...clone.slice(0,targetIndex),
                        movingItem,
                        ...clone.slice(targetIndex),
                    ]
                });
            }
        case 'BEGIN_DRAG':
            var index = findItem(state.items, action.id);
            var newState = Object.assign({},state);
            newState.items[index].isDragging = 'true';
            return newState;
        case 'END_DRAG':
            var index = findItem(state.items, action.id);
            var newState = Object.assign({},state);
            newState.items[index].isDragging = 'false';
            return newState;
        default:
            return Object.assign({},state)
    };
    
}