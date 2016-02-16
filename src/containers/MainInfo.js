import React from 'react';
import Text from '../components/Text';
import MainInfoBlock from './MainInfoBlock';

export default class MainInfo extends React.Component{
    constructor(props) {
        super(props);
    }

    handleChange(){

    }

    render() {
        var mainInfo = [];
        var { actions } = this.props;
        this.props.mainInfo.forEach((item,index)=>{
            mainInfo.push(
                <MainInfoBlock data={item} key={index} actions={actions} indexInMainInfo={index}/>
            );
            // switch(item.type){
            //     case 'education':
            //         mainInfo.push(<EducationCollection key={index} data={item} actions={actions} indexInMainInfo={index}/>);
            //         break;
            //     case 'skill':
            //         mainInfo.push(<SkillCollection key={index} data={item} actions={actions} indexInMainInfo={index}/>);
            //         break;
            //     case 'practice':
            //         mainInfo.push(<PracticeCollection key={index} data={item} actions={actions} indexInMainInfo={index}/>);
            //         break;
            // }
        })
        return(
            <div className="main-info">
                {mainInfo}
            </div>
        )
    }
}