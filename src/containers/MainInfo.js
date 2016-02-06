import React from 'react';
import Text from '../components/Text';
import EducationCollection from './EducationCollection';
import SkillCollection from './SkillCollection';
import PracticeCollection from './PracticeCollection';

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
            switch(item.type){
                case 'education':
                    mainInfo.push(<EducationCollection key={index} data={item} actions={actions} indexInMainInfo={index}/>);
                    break;
                case 'skill':
                    mainInfo.push(<SkillCollection key={index} data={item} actions={actions} indexInMainInfo={index}/>);
                    break;
                case 'practice':
                    mainInfo.push(<PracticeCollection key={index} data={item} actions={actions} indexInMainInfo={index}/>);
                    break;
            }
        })
        return(
            <div className="main-info">
                {mainInfo}
            </div>
        )
    }
}