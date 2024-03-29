import shortid from 'shortid';
export const initialState = {
    styleName:'base-style',
    baseInfo:{
        avatar:{
            imgUrl:'http://sfault-avatar.b0.upaiyun.com/253/959/2539590481-562f620530b4c_huge256',
            isEditting:false
        },
        name:{
            text:'王小黑',
            isEditting:false
        },
        job:{
            text:'Web前端工程师',
            isEditting:false
        },
        basic_info:[],
        contact:[{
            id:shortid.generate(),
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
            id:shortid.generate(),
            name:{
                text:'邮箱',
                isEditting:false
            },
            value:{
                text:'wjwang13@fudan.edu.cn',
                isEditting:false
            },
            isDragging:false
        },{
            id:shortid.generate(),
            name:{
                text:'个人博客',
                isEditting:false
            },
            value:{
                text:'blog.starkwang.com',
                isEditting:false
            },
            isDragging:false
        }]
    },
    mainInfo:[{
        id:shortid.generate(),
        type:'education',
        title:{
            text:'教育经历',
            isEditting:false
        },
        items:[{
            id:shortid.generate(),
            name:{
                text:'复旦大学',
                isEditting:false
            },
            time:{
                text:'2013年9月至2017年7月',
                isEditting:false
            },
            content:{
                text:'本科生，电子信息科学与技术专业',
                isEditting:false
            }
        }]
    },{
        id:shortid.generate(),
        type:'skill',
        title:{
            text:'专业技能',
            isEditting:false
        },
        items:[{
            id:shortid.generate(),
            text:'专业技能abcdjfalfsjkafw javascript 专业技能专业技能专业技能专业技能专业技能专业技能专业技能专业技能专业技能专业技能专业技能专业技能专业技能',
            isEditting:false,
            isDragging:false
        },{
            id:shortid.generate(),
            text:'专业技能专业技能专业技能专业技能专业技能专业技能专业技能专业技能专业技能专业技能专业技能专业技能专业技能专业技能',
            isEditting:false,
            isDragging:false
        }]
    },{
        id:shortid.generate(),
        type:'practice',
        title:{
            text:'实践经历',
            isEditting:false
        },
        items:[{
            id:shortid.generate(),
            isDragging:false,
            name:{
                text:'项目名称a',
                isEditting:false
            },
            time:{
                text:'项目时间',
                isEditting:false
            },
            content:{
                text:'项目内容项目内容项目内容项目内容项目内容项目内容项目内容abcdefgh项目内容项目内容',
                isEditting:false
            }
        },{
            id:shortid.generate(),
            isDragging:false,
            name:{
                text:'项目名称b',
                isEditting:false
            },
            time:{
                text:'项目时间',
                isEditting:false
            },
            content:{
                text:'项目内容项目内容项目内容项目内容项目内容项目内容项目内容abcdefgh项目内容项目内容',
                isEditting:false
            }
        }]
    },{
        id:shortid.generate(),
        type:'intern',
        title:{
            text:'实习经历',
            isEditting:false
        },
        items:[{
            id:shortid.generate(),
            isDragging:false,
            name:{
                text:'项目名称a',
                isEditting:false
            },
            job:{
                text:'职位',
                isEditting:false
            },
            time:{
                text:'项目时间',
                isEditting:false
            },
            content:{
                text:'项目内容项目内容项目内容项目内容项目内容项目内容项目内容abcdefgh项目内容项目内容',
                isEditting:false
            }
        }]
    },{
        id:shortid.generate(),
        type:'honor',
        title:{
            text:'荣誉奖项',
            isEditting:false
        },
        items:[{
            id:shortid.generate(),
            isDragging:false,
            name:{
                text:'奖项名称',
                isEditting:false
            },
            time:{
                text:'奖项时间',
                isEditting:false
            }
        }]
    }]
}