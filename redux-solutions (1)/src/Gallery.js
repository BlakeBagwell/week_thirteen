
const IMAGES = [
  'images/comfy.jpg',
  'images/farted.jpg',
  'images/hate.jpg',
  'images/lolcat_airplane.jpg',
  'images/mocked.jpg',
  'images/monorail.jpg',
];


export default class Gallery extends React.Component {
  render() {
    let currentImage = this.props.images[this.props.currentIndex];
    let next = this.props.next;
    let previous = this.props.prevous;
    return (
      <div>
        <button onClick={previous}>
          Previous
        </button>
        <button onClick={next}>
          Next
        </button>
        <br/>
          <img src={currentImage} key={currentImage}/>
        <div>
          {this.props.images.map((imageUrl, idx) =>
            <img key={idx} src={imageUrl} height="60"/>
          )}
        </div>
      </div>
    );
  }
}


aljshfkajs.map((item, idx){
  if (item.idx === action.idx){
    return state.gameState.gameBaord.currentPlayer;
  }
  else {
    return item;
  }

})
