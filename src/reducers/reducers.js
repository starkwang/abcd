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
            id:1,
            name:{
                text:'手机',
                isEditting:false
            },
            value:{
                text:'13316919664',
                isEditting:false
            },
            isDragging:false
        },{
            id:2,
            name:{
                text:'邮箱',
                isEditting:false
            },
            value:{
                text:'wjwang13@fudan.edu.cn',
                isEditting:false
            },
            isDragging:false
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
    console.log(items);
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
        case 'ITEM_SORT':
            const {sourceID,targetID} = action;
            if(sourceID == targetID){
                return Object.assign({},state);
            }else{
                if(action.location == 'contact'){
                    var arr = state.baseInfo.contact;

                    var sourceIndex = findItem(arr, sourceID);
                    var targetIndex = findItem(arr, targetID);

                    var clone = arr.slice(0,arr.length);   
                    var movingItem = clone.splice(sourceIndex,1)[0];

                    var newBaseInfo = Object.assign({},state.baseInfo,{
                        contact:[
                            ...clone.slice(0,targetIndex),
                            movingItem,
                            ...clone.slice(targetIndex),
                        ]
                    })
                    return Object.assign({},state,{
                        baseInfo:newBaseInfo
                    });
                }
                
            }
        case 'BEGIN_DRAG':
            if(action.location=='contact'){
                var index = findItem(state.baseInfo.contact, action.id);
                var baseInfo = Object.assign({},state.baseInfo);
                baseInfo.contact[index].isDragging = true;
                return Object.assign({},state,{
                    baseInfo:baseInfo
                });
            }

        case 'END_DRAG':
            if(action.location=='contact'){
                console.log('END_DRAG');
                var index = findItem(state.baseInfo.contact, action.id);
                var baseInfo = Object.assign({},state.baseInfo);
                baseInfo.contact[index].isDragging = false;
                return Object.assign({},state,{
                    baseInfo:baseInfo
                });
            }

        case 'TEXT_EDIT':
            console.log('TEXT_EDIT',action);
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
            if(action.name == 'contact-name'){
                var newBaseInfo = Object.assign({},state.baseInfo);
                newBaseInfo.contact[action.index].name.isEditting = true;
                return Object.assign({},state,{
                    baseInfo:newBaseInfo
                });
            }
            if(action.name == 'contact-value'){
                var newBaseInfo = Object.assign({},state.baseInfo);
                newBaseInfo.contact[action.index].value.isEditting = true;
                return Object.assign({},state,{
                    baseInfo:newBaseInfo
                });
            }
        case 'ENTER_EDIT':
            console.log('ENTER_EDIT',action);
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
            if(action.name == 'contact-name'){
                var newBaseInfo = Object.assign({},state.baseInfo);
                newBaseInfo.contact[action.index].name.text = action.value;
                newBaseInfo.contact[action.index].name.isEditting = false;
                return Object.assign({},state,{
                    baseInfo:newBaseInfo
                });
            }
            if(action.name == 'contact-value'){
                var newBaseInfo = Object.assign({},state.baseInfo);
                newBaseInfo.contact[action.index].value.text = action.value;
                newBaseInfo.contact[action.index].value.isEditting = false;
                return Object.assign({},state,{
                    baseInfo:newBaseInfo
                });
            }
        default:
            return Object.assign({},state)
    };
    
}