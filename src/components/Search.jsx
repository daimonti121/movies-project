import { Component } from "react";

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            filter: 'all'
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {

            this.props.searchMovies(this.state.search, this.state.filter);

            this.setState({
                search: '',
                filter: 'all'
            })
        }
    }

    render() {

        const { search, filter } = this.state;

        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input
                            className="validate"
                            placeholder="search"
                            type="search"
                            name="search"
                            value={search}
                            onChange={this.handleChange}
                            onKeyDown={this.handleKeyDown}
                        />
                        <button className="btn search-btn" onClick={() => {this.props.searchMovies(this.state.search, this.state.filter); this.setState({search: '', filter: 'all'})}}>Search</button>

                    </div>
                    <div className="input-field display-flex">
                        <p className="margin">
                            <label>
                                <input className="with-gap" type="radio" name="filter" value="all" checked={filter === "all"} onChange={this.handleChange}/>
                                <span>All</span>
                            </label>
                        </p>

                        <p className="margin">
                            <label>
                                <input className="with-gap" type="radio" name="filter" value="movie" checked={filter === "movie"} onChange={this.handleChange}/>
                                <span>Movies only</span>
                            </label>
                        </p>

                        <p className="margin">
                            <label>
                                <input className="with-gap" type="radio" name="filter" value="series" checked={filter === "series"} onChange={this.handleChange}/>
                                <span>Series only</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export { Search };