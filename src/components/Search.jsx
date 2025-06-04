import { Component } from "react";

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
        }
    }

    handleChangeSearch = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {

            this.props.searchMovies(this.state.search);

            this.setState({
                search: ''
            })
        }
    }

    render() {

        const { search } = this.state;

        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input
                            className="validate"
                            placeholder="search"
                            type="search"
                            value={search}
                            onChange={this.handleChangeSearch}
                            onKeyDown={this.handleKeyDown}
                        />
                        <button className="btn search-btn" onClick={() => this.props.searchMovies(this.state.search)}>Search</button>
                    </div>
                </div>
            </div>
        )
    }
}

export { Search };