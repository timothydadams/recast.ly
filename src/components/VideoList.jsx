import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => (
  //if there is a particular prop that we want to get inside props...
  //call it directly ny ({video}) where "video" is a key of props
  //if we destructure here then we will need to also pass in the other params ie. onVideoClick
  <div className="video-list">
    {props.videos.map(item =>
    // Add video key?
      <VideoListEntry video={item} click={props.click} key={item.id.videoId}/>
    )}
  </div>
);


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};


// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
