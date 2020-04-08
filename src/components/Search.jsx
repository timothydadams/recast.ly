

var Search = (props) => (

  <div className="search-bar form-inline">
    <input
      className="form-control"
      type="text"
      onChange={()=>{ props.action; }}
      //onChange = anon function with event that handles input change with e.target.value
    />
    <button className="btn hidden-sm-down" onClick={props.action}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
//text box used to monitor text