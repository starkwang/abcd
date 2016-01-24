import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//import Immutable from 'immutable';
import App from './containers/App'
import Reducers from './reducers/reducers';

let store = createStore(Reducers);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

