var searchYouTube = (options, callback) => {

  //console.log('searchYouTube', options);

  $.get('https://www.googleapis.com/youtube/v3/search',
    {
      part: 'snippet',
      key: options.key,
      query: options.query,
      max: options.max
    }, (data) => { callback(data.items); }
  );
};

export default searchYouTube;
