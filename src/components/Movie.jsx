function Movie(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster,
    } = props;

    return   <div id={id} className="card small">
        <div className="card-image waves-effect waves-block waves-light">
            {
                poster==="N/A" 
                ? <img className="activator" src={`https://via.placeholder.com/300x150?text= ${title}`} />
                : <img className="activator" src={poster} />
            }
            
        </div>
        <div className="card-content">
            <a href='#'>
                <span className="card-title activator grey-text text-darken-4">
                    {title}
                </span>
            </a> 
            <p>{year}<span className="right">
                <a href='#'>
                    {type}
                </a>
            </span></p>
            
        </div>
    </div>
}

export {Movie}