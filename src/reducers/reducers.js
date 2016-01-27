const initialState = {
    // text: 'Hello',
    // inputs:[{
    //     content:'123'
    // }],
    // items:[{
    //     text:'aaaaaaaaaaa',
    //     id:'key-a',
    //     isDragging:'false'
    // },{
    //     text:'bbbbbbbbbbb',
    //     id:'key-b',
    //     isDragging:'false'
    // },{
    //     text:'ccccccccccc',
    //     id:'key-c',
    //     isDragging:'false'
    // }],
    styleName:'base-style',
    baseInfo:{
        name:{
            text:'王小黑',
            isEditting:false
        },
        job:{
            text:'Web前端工程师',
            isEditting:false
        },
        contact:[{
            name:'手机',
            value:'13316919664'
        },{
            name:'邮箱',
            value:'wjwang13@fudan.edu.cn'
        }]
    },
    mainInfo:[{
        title:'教育经历',
        items:[{
            name:{
                text:'复旦大学',
                isEditting:true
            },
            time:{
                text:'2013.09 - 2017.07',
                isEditting:false
            },
            major:{
                text:'电子信息科学与技术',
                isEditting:false
            }
        },{
            name:{
                text:'复旦大学',
                isEditting:false
            },
            time:{
                text:'2013.09 - 2017.07',
                isEditting:false
            },
            major:{
                text:'电子信息科学与技术',
                isEditting:false
            }
        }]
    },{
        title:'专业技能',
        items:[]
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
            newState.items[index].isDragging = true;
            return newState;
        case 'END_DRAG':
            var index = findItem(state.items, action.id);
            var newState = Object.assign({},state);
            newState.items[index].isDragging = false;
            return newState;
        case 'TEXT_EDIT':
            if(action.name == 'name'){
                var newBaseInfo = Object.assign({},state.baseInfo);
                newBaseInfo.name.isEditting = true;
                return Object.assign({},state,{
                    baseInfo:newBaseInfo
                });
            }
            if(action.name == 'job'){
                var newBaseInfo = Object.assign({},state.baseInfo);
                newBaseInfo.job.isEditting = true;
                return Object.assign({},state,{
                    baseInfo:newBaseInfo
                });
            }
        case 'ENTER_EDIT':
            if(action.name == 'name'){
                var newBaseInfo = Object.assign({},state.baseInfo);
                newBaseInfo.name.text = action.value;
                newBaseInfo.name.isEditting = false;
                return Object.assign({},state,{
                    baseInfo:newBaseInfo
                });
            }
            if(action.name == 'job'){
                var newBaseInfo = Object.assign({},state.baseInfo);
                newBaseInfo.job.text = action.value;
                newBaseInfo.job.isEditting = false;
                return Object.assign({},state,{
                    baseInfo:newBaseInfo
                });
            }
        default:
            return Object.assign({},state)
    };
    
}