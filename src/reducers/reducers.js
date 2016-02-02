import shortid from 'shortid';
import { initialState } from './initialState';
import { History } from './History';
// var History = [];
// const initialState = {
//     styleName:'base-style',
//     baseInfo:{
//         avatar:{
//             imgUrl:'http://sfault-avatar.b0.upaiyun.com/253/959/2539590481-562f620530b4c_huge256',
//             isEditting:false
//         },
//         name:{
//             text:'王小黑',
//             isEditting:false
//         },
//         job:{
//             text:'Web前端工程师',
//             isEditting:false
//         },
//         basic_info:[],
//         contact:[{
//             id:shortid.generate(),
//             name:{
//                 text:'手机',
//                 isEditting:false
//             },
//             value:{
//                 text:'13316919664',
//                 isEditting:false
//             },
//             isDragging:false
//         },{
//             id:shortid.generate(),
//             name:{
//                 text:'邮箱',
//                 isEditting:false
//             },
//             value:{
//                 text:'wjwang13@fudan.edu.cn',
//                 isEditting:false
//             },
//             isDragging:false
//         },{
//             id:shortid.generate(),
//             name:{
//                 text:'个人博客',
//                 isEditting:false
//             },
//             value:{
//                 text:'blog.starkwang.com',
//                 isEditting:false
//             },
//             isDragging:false
//         }]
//     },
//     mainInfo:[{
//         id:shortid.generate(),
//         type:'education',
//         title:{
//             text:'教育经历',
//             isEditting:false
//         },
//         items:[{
//             name:{
//                 text:'复旦大学',
//                 isEditting:false
//             },
//             time:{
//                 text:'2013年9月至2017年7月',
//                 isEditting:false
//             },
//             major:{
//                 text:'本科生，电子信息科学与技术专业',
//                 isEditting:false
//             }
//         },{
//             name:{
//                 text:'复旦大学',
//                 isEditting:false
//             },
//             time:{
//                 text:'2013年9月至2017年7月',
//                 isEditting:false
//             },
//             major:{
//                 text:'本科生，电子信息科学与技术专业',
//                 isEditting:false
//             }
//         }]
//     },{
//         id:shortid.generate(),
//         type:'skill',
//         title:'专业技能',
//         items:[]
//     }]
// }
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
    console.log(action.type, action);
    switch (action.type) {
        case 'ITEM_SORT':
            var {sourceID,targetID} = action;
            if(sourceID == targetID){
                return Object.assign({},state);
            }else{
                var category = action.location[0];
                var newCategory = category=='baseInfo'?Object.assign({},state[category]):Object.assign([],state[category]);
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
                //History.add(Object.assign({},state,tmp));
                return Object.assign({},state,tmp);
            }
        case 'BEGIN_DRAG':
            var category = action.location[0];
            var newCategory = category=='baseInfo'?Object.assign({},state[category]):Object.assign([],state[category]);
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
            var category = action.location[0];
            var newCategory = category=='baseInfo'?Object.assign({},state[category]):Object.assign([],state[category]);
            var targetArr = newCategory;
            for(var i = 1 ; i < action.location.length ; i++){
                targetArr = targetArr[action.location[i]];
            }
            var index = findItem(targetArr, action.id);
            targetArr[index].isDragging = false;
            var tmp = {};
            tmp[action.location[0]] = newCategory;
            History.add(Object.assign({},state,tmp));
            return Object.assign({},state,tmp);

        case 'TEXT_EDIT':
            var category = action.location[0];
            var newCategory = category=='baseInfo'?Object.assign({},state[category]):Object.assign([],state[category]);
            var targetNode = newCategory;
            for(var i = 1 ; i < action.location.length ; i++){
                targetNode = targetNode[action.location[i]];
            }
            targetNode.isEditting = true;
            var tmp = {};
            tmp[action.location[0]] = newCategory;
            History.add(Object.assign({},state,tmp));
            return Object.assign({},state,tmp);
        case 'ENTER_EDIT':
            var category = action.location[0];
            var newCategory = category=='baseInfo'?Object.assign({},state[category]):Object.assign([],state[category]);
            var targetNode = newCategory;
            for(var i = 1 ; i < action.location.length ; i++){
                targetNode = targetNode[action.location[i]];
            }
            targetNode.isEditting = false;
            targetNode.text = action.value;
            var tmp = {};
            tmp[action.location[0]] = newCategory;
            History.add(Object.assign({},state,tmp));
            return Object.assign({},state,tmp);

        case 'ADD_CONTACT':
            var newBaseInfo = Object.assign({},state.baseInfo);
            var id = shortid.generate();
            newBaseInfo.contact.push({
                id:id,
                name:{
                    text:'名称',
                    isEditting:false
                },
                value:{
                    text:'值',
                    isEditting:false
                },
                isDragging:false
            })
            History.add(Object.assign({},state,{
                baseInfo: newBaseInfo
            }));
            return Object.assign({},state,{
                baseInfo: newBaseInfo
            })
        case 'DELETE_CONTACT':
            var newBaseInfo = Object.assign({},state.baseInfo);
            newBaseInfo.contact.splice(action.index,1);
            History.add(Object.assign({},state,{
                baseInfo: newBaseInfo
            }));
            return Object.assign({},state,{
                baseInfo: newBaseInfo
            })
        case 'EDIT_AVATAR':
            var newBaseInfo = Object.assign({},state.baseInfo);
            newBaseInfo.avatar.isEditting = true;
            History.add(Object.assign({},state,{
                baseInfo: newBaseInfo
            }));
            return Object.assign({},state,{
                baseInfo: newBaseInfo
            });
        case 'ENTER_AVATAR':
            var newBaseInfo = Object.assign({},state.baseInfo);
            newBaseInfo.avatar.isEditting = false;
            newBaseInfo.avatar.imgUrl = action.url;
            History.add(Object.assign({},state,{
                baseInfo: newBaseInfo
            }));
            return Object.assign({},state,{
                baseInfo: newBaseInfo
            });
        case 'ADD_ITEM_IN_MAIN_INFO':
            var newMainInfo = Object.assign([],state.mainInfo);
            var targetArr = newMainInfo[action.indexInMainInfo].items;
            if(action.category == 'education'){
                targetArr.push({
                    name:{
                        text:'这里填入名称',
                        isEditting:false
                    },
                    time:{
                        text:'这里填入时间',
                        isEditting:false
                    },
                    major:{
                        text:'这里填入简介',
                        isEditting:false
                    }
                });
            }
            if(action.category == 'skill'){
                targetArr.push({
                        id:shortid.generate(),
                        text:'这里填入专业技能',
                        isEditting:false
                });
            }
            History.add(Object.assign({},state,{
                mainInfo: newMainInfo
            }));
            return Object.assign({},state,{
                mainInfo: newMainInfo
            });
        case 'HISTORY_BACKWARD':
            return History.backward();
        case 'HISTORY_FORWARD':
            return History.forward();
        default:
            return Object.assign({},state)
    };
    
}