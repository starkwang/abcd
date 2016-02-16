import React from 'react';
import BaseInfo from './BaseInfo';
import MainInfo from './MainInfo';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/actions';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class App extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        const { actions, baseInfo, mainInfo, styleName, name} = this.props;
        if(styleName == 'base-style'){
            return (
                <div className="main-editor">
                    <div className={styleName}>
                        <BaseInfo baseInfo={baseInfo} actions={actions}/>
                        <MainInfo mainInfo={mainInfo} actions={actions}/>
                    </div>
                    <div className="control">
                        <button onClick={actions.historyBackward}>后退</button>
                        <button onClick={actions.historyForward}>前进</button>
                    </div>
                </div>
            );
        }
    }
}


function mapStateToProps(state) {
    return {
        baseInfo: state.baseInfo,
        mainInfo: state.mainInfo,
        styleName: state.styleName,
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions : bindActionCreators(Actions,dispatch)
    }
}

App = connect(mapStateToProps,mapDispatchToProps)(App);
export default App = DragDropContext(HTML5Backend)(App);