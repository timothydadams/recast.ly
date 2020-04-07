import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playerVid: exampleVideoData[0],
      allVideos: exampleVideoData
      // playing: false,
    };
  }

  onVideoClick(video) { //add to props somehow...
    this.setState({playerVid: video});
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here </h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.playerVid} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.allVideos} click={this.onVideoClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }

}

//
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
