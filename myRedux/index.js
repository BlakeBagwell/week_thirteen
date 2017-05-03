import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import Counter from './Counter';
import Gallery from './Gallery';
import CounterReducer from './Counter.reducer';
import GalleryReducer from './Gallery.reducer';
import * as ReactRedux from 'react-redux';

const INITIAL_STATE = {
  gallleryData: {
    currentIndex: null,
    images: []
  },
  count: 0
};

function reducer(state = INITIAL_STATE, action) {
  return {
    currentIndex: galleryReducer(state.gallleryData, action),
    count: counterReducer(state.count, action)
  }
}

const store = Redux.createStore(reducer);

const CounterContainer = ReactRedux.connect(
  state => ({count: state.count}),
  dispatch => ({
    add: () => dispatch({
      type: 'add'
    }),
    subtract: () => dispatch({
      type: 'subtract'
    })
  })
)(Counter);

const GalleryContainer = ReactRedux.connect(
  state => ({currentIndex: state.gallleryData.currentIndex}),
  dispatch => ({
    next: () => dispatch({
      type: 'next'
    }),
    previous: () => dispatch({
      type: 'previous'
    })
  })
)(Gallery);

ReactDom.render(
  <ReactRedux.Provider store={store}>
    <div>
      <GalleryContainer/>
      <CounterContainer/>
    </div>
  <ReactRedux.Provider/>
  document.getElementById('root')
);
