import YOUTUBE_API_KEY from '../config/youtube.js';
import searchYouTube from '../lib/searchYouTube.js';

var Search = (props) => (

  <div className="search-bar form-inline">
    <input className="form-control" type="text" />
    <button className="btn hidden-sm-down" onClick={()=> {
      //build our options object
      var options = {
        key: YOUTUBE_API_KEY,
        query: $('input').val(),
        max: 5
      };

      //pass options calling searchYouTube function for GET request
      searchYouTube(options, props.action);

    }}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
//text box used to monitor text