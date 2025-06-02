export function Card(props) {
    const {Title, Year, Poster} = props;

    return (
        <div className="row">
            <div className="col s12 m10">
                <div className="card">
                    <div className="card-image">
                        <img src={Poster}/>                        
                    </div>
                    <div className="card-content">
                        <p className="card-title">{Title}</p>
                        <p>{Year}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}