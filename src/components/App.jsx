import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playerVid: exampleVideoData[0],
      allVideos: exampleVideoData
    };
  }

  //getyoutubevideo method... which compiles the options object
  // and then calls searchyoutube
  getVidsFromYT(query) {
    //var query = query || $('input').val();

    //build our options object
    var options = {
      key: this.props.API_KEY,
      query: query
    };

    this.props.search(options, (videos) => {
      this.setState({
        allVideos: videos,
        playerVid: videos[0]
      });
    });
  }

  onVideoClick(video) {
    this.setState({playerVid: video});
  }

  //rendering info when component mounts to DOM
  // componentDidMount() {
  //   this.getVidsFromYT('corgi');
  // }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search action={this.getVidsFromYT.bind(this)} />
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
