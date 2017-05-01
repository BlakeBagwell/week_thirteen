const pureCli = require('./pure-cli');

function reducer(state, input) {
  if (state === null) {
    let state = {stack: []};
    return state;
  } else if (Number(input)) {
    // return {stack: [Number(input)]};
    // return state.stack.push(Number(input));
    let newArray = state.stack.concat([Number(input)]);
    let newObj = Object.assign({}, state, {
      stack: newArray
    });
    return newObj;
  } else if (input === '+') {
    let firstValue = state.stack[state.stack.length - 1];
    let secondValue = state.stack[state.stack.length - 2];
    let sum = [firstValue + secondValue];
    let savedArray = state.stack.slice(0, state.stack.length - 2);
    let newObj = Object.assign({}, state, {
      stack: savedArray.concat(sum)
    });
    return newObj;
  } else if (input === '-') {
    let firstValue = state.stack[state.stack.length - 1];
    let secondValue = state.stack[state.stack.length - 2];
    let difference = [firstValue - secondValue];
    let savedArray = state.stack.slice(0, state.stack.length - 2);
    let newObj = Object.assign({}, state, {
      stack: savedArray.concat(difference)
    });
    return newObj;
  } else if (input === '*') {
    let firstValue = state.stack[state.stack.length - 1];
    let secondValue = state.stack[state.stack.length - 2];
    let newArray = [firstValue * secondValue];
    let newObj = Object.assign({}, state, {
      stack: newArray
    });
    return newObj;
  } else if (input === '/') {
    let firstValue = state.stack[state.stack.length - 1];
    let secondValue = state.stack[state.stack.length - 2];
    let newArray = [firstValue / secondValue];
    let newObj = Object.assign({}, state, {
      stack: newArray
    });
    return newObj;
  } else if (input === 'q') {
    let newObj = Object.assign({}, state, {
      action: 'end'
    });
    return newObj;
  }
}

module.exports = reducer;

function display(state) {
  console.log(state.stack.join(' '));
}

if (require.main === module) {
  pureCli(reducer, display);
}
