import React from 'react';
import Practice from '../components/Education';
import Text from '../components/Text';
export default class PracticeCollection extends React.Component{
    constructor(props) {
        super(props);
        this.addItemInMainInfo = this.addItemInMainInfo.bind(this);
    }

    addItemInMainInfo(){
        this.props.actions.addItemInMainInfo(this.props.indexInMainInfo, 'practice');
    }

    render() {
        const { title, items } = this.props.data;
        const { actions, indexInMainInfo } = this.props;
        var practices = [];
        items.forEach((item,index)=>{
            practices.push(<Practice item={item} actions={actions} indexInMainInfo={indexInMainInfo} index={index} key={index}/>)
        })
        return (
            <div className="practice">
                <i className="iconfont">&#xe603;</i>
                <Text className="title" text={title.text} isEditting={title.isEditting} location={['mainInfo',indexInMainInfo,'title']} textEdit={actions.textEdit} enterEdit={actions.enterEdit} />
                <button onClick={this.addItemInMainInfo}>+</button>
                {practices}
            </div>
        );
    }
}