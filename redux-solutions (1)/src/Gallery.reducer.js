const INITIAL_STATE = {
  currentIndex: 0,
  images: []
};

function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'next') {
    let nextIndex = state.currentIndex + 1;
    if (nextIndex >= state.images.length) {
      nextIndex = 0;
    }
    return Object.assign({}, state, {
      currentIndex: nextIndex
    });
  }
  if (action.type === 'previous') {
    let previousIndex = state.currentIndex - 1;
    if (previousIndex <= 0) {
      previousIndex = state.images.length - 1
    }
    return Object.assign({}, state, {
      currentIndex: nextIndex
    });
  }
  if (action.type === 'receive_images') {
    return Object.assign({}, state, {
      images: action.images
    });
  }
  return state;
}

export default reducer;
