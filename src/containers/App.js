import React from 'react';
import Hello from '../components/Hello';
import Change from '../components/Change';
import InputAddButton from '../components/InputAddButton';
import InputArea from './InputArea';
import DragBox from './DragBox';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/actions';

class App extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        const { actions, text, inputs, items, styleName} = this.props;
        var dragItems = [{
            text:'abcsawfwaf'
        },{
            text:'wwwwwwwwww'
        },{
            text:'ffffffffff'
        }];
        if(styleName == 'base-style'){
            return (
                <div className="main-editor">
                    <div className={styleName}>
                        <div className="base-info">

                        </div>
                        <div className="main-info">

                        </div>
                    </div>
                </div>
            );
        }
    }
}

//<Hello actions={actions} text={text} />
//<Change actions={actions} />

//<InputArea inputs={inputs} actions={actions} />
//<InputAddButton actions={actions} />

//<DragBox dragItems={items} actions={actions} />


function mapStateToProps(state) {
    return { 
        text: state.text ,
        inputs: state.inputs,
        items: state.items,
        styleName: state.styleName
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions : bindActionCreators(Actions,dispatch)
    }
}

export default App = connect(mapStateToProps,mapDispatchToProps)(App)