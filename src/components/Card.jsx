export function Card(props) {
    const {Title: title, Year: year, Poster: poster, imdbID: id, Type: type} = props;

    return (
        <div id={id} className="row">
            <div className="col s12 m10">
                <div className="card">
                    <div className="card-image">
                        {poster === 'N/A' ? <img src={`https://placehold.jp/30/dd6699/ffffff/234x352.png?text=${title}`} /> : <img src={poster} /> }      
                    </div>
                    <div className="card-content">
                        <p className="card-title">{title}</p>
                        <p>{year} <span className="right">{type}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}