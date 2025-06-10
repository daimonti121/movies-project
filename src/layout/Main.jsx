import { Component } from 'react';

import { Cards } from '../components/Cards';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [],
            search: '',
            filter: '',
            loading: true,
        };
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=377f9cd0&s=matrix')
            .then((response) => response.json())
            .then((data) => {
                this.setState({ cards: data.Search, loading: false });
            });
    }

    searchMovies = (value, type = 'all') => {
        this.setState({ loading: true });
        fetch(
            `http://www.omdbapi.com/?i=tt3896198&apikey=377f9cd0&s=${value}${
                type !== 'all' ? `&type=${type}` : ''
            }`
        )
            .then((response) => response.json())
            .then((data) => {
                this.setState({ cards: data.Search, loading: false });
            });
    };

    render() {
        const { cards, loading } = this.state;

        return (
            <main className='container content main-content'>
                <Search searchMovies={this.searchMovies} />
                {loading ? <Preloader /> : <Cards cards={cards} />}
            </main>
        );
    }
}

export { Main };
