import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Header from './components/Header';
import Tray from './components/Tray';
import { Wrapper } from './styles';
import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

let store;
if (process.env.REACT_APP_STAGE === 'dev') {
  store = createStoreWithMiddleware(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
} else {
  store = createStoreWithMiddleware(reducers);
}

const App = () => (
  <Provider store={store}>
    <Wrapper>
      <Header />
      <Tray />
    </Wrapper>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
