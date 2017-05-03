const INITIAL_STATE = {
  currentIndex: 0,
  images: []
};

function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'get_images') {
    return Object.assign({}, state, {
      images: action.images
    });
  } else if(action.type === 'next') {
    if (state.currentIndex >= images.length) {
      return Object.assign({}, state, {
        currentIndex: 0
      });
    } else {
      return Object.assign({}, state, {
        currentIndex: state.currentIndex + 1
      });
    }
  } else if (action.type === 'previous') {
    return Object.assign({}, state, {
      currentIndex: state.currentIndex - 1
    });
  } else {
    return state;
  }
}

export default reducer;
