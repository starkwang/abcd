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
            var {sourceID,targetID} = action;
            if(sourceID == targetID){
                return Object.assign({},state);
            }else{
                console.log('ITEM_SORT',action);
                var category = action.location[0];
                var newCategory = Object.assign({},state[category]);
                var targetArr = newCategory;
                for(var i = 1 ; i < action.location.length ; i++){
                    targetArr = targetArr[action.location[i]];
                }
                var sourceIndex = findItem(targetArr, sourceID);
                var targetIndex = findItem(targetArr, targetID);
                var clone = targetArr.slice(0,targetArr.length);   
                var movingItem = clone.splice(sourceIndex,1)[0];
                targetArr = [
                    ...clone.slice(0,targetIndex),
                    movingItem,
                    ...clone.slice(targetIndex),
                ]
                var targetNode = newCategory;
                for(var i = 1 ; i < action.location.length-1 ; i++){
                    targetNode = targetNode[action.location[i]];
                }
                targetNode[action.location[action.location.length-1]] = targetArr;
                var tmp = {};
                tmp[action.location[0]] = newCategory;
                return Object.assign({},state,tmp);
            }
        case 'BEGIN_DRAG':
            console.log('BEGIN_DRAG',action);
            var category = action.location[0];
            var newCategory = Object.assign({},state[category]);
            var targetArr = newCategory;
            for(var i = 1 ; i < action.location.length ; i++){
                targetArr = targetArr[action.location[i]];
            }
            var index = findItem(targetArr, action.id);
            targetArr[index].isDragging = true;
            var tmp = {};
            tmp[action.location[0]] = newCategory;
            return Object.assign({},state,tmp);

        case 'END_DRAG':
            console.log('END_DRAG',action);
            var category = action.location[0];
            var newCategory = Object.assign({},state[category]);
            var targetArr = newCategory;
            for(var i = 1 ; i < action.location.length ; i++){
                targetArr = targetArr[action.location[i]];
            }
            var index = findItem(targetArr, action.id);
            targetArr[index].isDragging = false;
            var tmp = {};
            tmp[action.location[0]] = newCategory;
            return Object.assign({},state,tmp);

        case 'TEXT_EDIT':
            console.log('TEXT_EDIT',action);
            var category = action.location[0];
            var newCategory = Object.assign({},state[category]);
            var targetNode = newCategory;
            for(var i = 1 ; i < action.location.length ; i++){
                targetNode = targetNode[action.location[i]];
            }
            targetNode.isEditting = true;
            var tmp = {};
            tmp[action.location[0]] = newCategory;
            return Object.assign({},state,tmp);
        case 'ENTER_EDIT':
            console.log('ENTER_EDIT',action);
            var category = action.location[0];
            var newCategory = Object.assign({},state[category]);
            var targetNode = newCategory;
            for(var i = 1 ; i < action.location.length ; i++){
                targetNode = targetNode[action.location[i]];
            }
            targetNode.isEditting = false;
            targetNode.text = action.value;
            var tmp = {};
            tmp[action.location[0]] = newCategory;
            return Object.assign({},state,tmp);
        default:
            return Object.assign({},state)
    };
    
}