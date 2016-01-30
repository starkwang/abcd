import React from 'react';
import Text from '../components/Text';
import EducationCollection from './EducationCollection';

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
            if(item.type == 'education'){
                mainInfo.push(<EducationCollection key={index} data={item} actions={actions} indexInMainInfo={index}/>);
            }
        })
        return(
            <div className="main-info">
                {mainInfo}
            </div>
        )
    }
}