import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './HeadsTails.reducer';
import * as Redux from 'redux';

// Add code to create a store
let store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class HeadsTails extends React.Component {
  flip() {
    let chance = Math.random();
    if(chance >= .5) {
      store.dispatch({
        type: 'heads'
      });
    } else {
      store.dispatch({
        type: 'tails'
      });
    }

  }
  render() {
    let value = 0.6;
    let coinDisplay;

      coinDisplay = <img src={store.getState()}/>;

    return (
      <div>
        {coinDisplay}
        <button onClick={() => this.flip()}>
          Flip!
        </button>
      </div>
    );
  }
}

// Wrap this in a display function, and subscribe to store's state
// changes and re-display
function display() {
  ReactDOM.render(<HeadsTails/>, document.getElementById('root'));
}

display();

store.subscribe(display);
