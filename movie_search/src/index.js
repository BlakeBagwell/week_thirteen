import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReduxThunk from 'redux-thunk';
import * as Redux from 'redux';
import { Provider } from 'react-redux';
import MovieWidget from './MovieWidget';
import reducer from './MovieWidget.reducer';
import MovieWidgetActions from './MovieWidget.actions';


const store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
Redux.applyMiddleware(ReduxThunk)
);

ReactDOM.render(
  <Provider store = {store}>
    <MovieWidgetContainer/>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
