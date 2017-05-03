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
  state => ({currentIndex: state.currentIndex}),
  dispatch => ({
    next: () => dispatch({
      type: 'next'
    }),
    previous: () => dispatch({
      type: 'previous'
    })
  })
)(Gallery);
