import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux';
import Counter from './containers/Counter/Counter';
import reducer from './store/counterReducer';
import buttonReducer from './store/buttonReducer';

import './App.css';
import { callapi } from './store/saga'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  rdcr : reducer,
  btnrd : buttonReducer
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk,sagaMiddleware)))

sagaMiddleware.run(callapi)
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Provider store={store}>
           <Counter />
        </Provider>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
