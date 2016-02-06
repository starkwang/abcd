import React from 'react';
import Education from '../components/Education';
import Text from '../components/Text';
export default class EducationCollection extends React.Component{
    constructor(props) {
        super(props);
        this.addItemInMainInfo = this.addItemInMainInfo.bind(this);
    }

    addItemInMainInfo(){
        this.props.actions.addItemInMainInfo(this.props.indexInMainInfo, 'education');
    }

    render() {
        const { title, items } = this.props.data;
        const { actions, indexInMainInfo } = this.props;
        var educations = [];
        items.forEach((item,index)=>{
            educations.push(<Education item={item} actions={actions} indexInMainInfo={indexInMainInfo} index={index} key={index}/>)
        })
        return (
            <div className="education">
                <i className="iconfont">&#xe603;</i>
                <Text className="title" text={title.text} isEditting={title.isEditting} location={['mainInfo',indexInMainInfo,'title']} textEdit={actions.textEdit} enterEdit={actions.enterEdit} />
                <button onClick={this.addItemInMainInfo}>+</button>
                {educations}
            </div>
        );
    }
}