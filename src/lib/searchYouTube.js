var searchYouTube = (options, callback) => {

  $.get('https://www.googleapis.com/youtube/v3/search',
    {
      part: 'snippet',
      key: options.key,
      q: options.query,
      maxResults: options.max,
      type: 'video'
      // ,
      // videoEmbeddable: 'true'
    },
    (data) => {
      if (callback) {
        callback(data.items);
      }
    }
  );
};

export default searchYouTube;
