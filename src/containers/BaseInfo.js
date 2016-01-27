import React from 'react';
import Text from '../components/Text';

export default class BaseInfo extends React.Component{
    constructor(props) {
        super(props);
    }

    handleChange(){

    }

    render() {
        const { name, job, contact} = this.props.baseInfo;
        const { actions } = this.props;
        return(
        <div className="base-info">
            <Text className="name" text={name.text} isEditting={name.isEditting} name="name" textEdit={actions.textEdit} enterEdit={actions.enterEdit}></Text>
            <Text className="job" text={job.text} isEditting={job.isEditting} name="job" textEdit={actions.textEdit} enterEdit={actions.enterEdit}></Text>
            <hr/>
        </div>
        )
    }
}