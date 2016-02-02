import React from 'react';
import Skill from '../components/Skill';
import Text from '../components/Text';
export default class SkillCollection extends React.Component{
    constructor(props) {
        super(props);
        this.addItemInMainInfo = this.addItemInMainInfo.bind(this);
    }

    addItemInMainInfo(){
        this.props.actions.addItemInMainInfo(this.props.indexInMainInfo, 'skill');
    }

    render() {
        const { title, items } = this.props.data;
        const { actions, indexInMainInfo } = this.props;
        var skills = [];
        items.forEach((item,index)=>{
            skills.push(<Skill item={item} id={item.id} location={['mainInfo',indexInMainInfo,'items']} actions={actions} indexInMainInfo={indexInMainInfo} index={index} key={index} beginDrag={actions.beginDrag} endDrag={actions.endDrag} itemSort={actions.itemSort}/>)
        })
        return (
            <div className="skill">
                <i className="iconfont">&#xe605;</i>
                <Text className="title" text={title.text} isEditting={title.isEditting} location={['mainInfo',indexInMainInfo,'title']} textEdit={actions.textEdit} enterEdit={actions.enterEdit} />
                <button onClick={this.addItemInMainInfo}>+</button>
                {skills}
            </div>
        );
    }
}