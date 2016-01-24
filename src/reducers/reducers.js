const initialState = {
    text: 'Hello',
    inputs:[{
        content:'123'
    }]
}
export default function todoApp(state = initialState, action) {
    console.log(state);
    switch (action.type) {
        case 'CHANGE_TEXT':
            return {
                text:state.text=='Hello'?'Stark':'Hello',
                inputs:state.inputs
            }
        case 'BUTTON_CLICK':
            return {
                text: 'You just click button',
                inputs:state.inputs
            }
        case 'ADD_INPUT':
            return {
                text: state.text,
                inputs: [
                    ...state.inputs,
                    {
                        content:''
                    }
                ]
            }
        case 'INPUT_CHANGE':
            var newState = {
                text: action.text,
                inputs: state.inputs.slice(0,state.inputs.length)
            }
            newState.inputs[action.index].content = action.text;
            return newState;
        default:
          return {
            text:'Hello',
            inputs:[{
                content:'123'
            }]
        };
    }
}