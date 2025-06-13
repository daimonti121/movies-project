import { Component } from 'react';

import { Cards } from '../components/Cards';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

const API_KEY = import.meta.env.VITE_API_KEY;

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
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=mad max`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ cards: data.Search, loading: false });
            })
            .catch((err) => {
                console.log(err);
                this.setState({ loading: false });
            });
    }

    searchMovies = (value, filter = 'all') => {
        this.setState({ loading: true });
        fetch(
            `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${value}${
                filter !== 'all' ? `&type=${filter}` : ''
            }`
        )
            .then((response) => response.json())
            .then((data) => {
                this.setState({ cards: data.Search, loading: false });
            })
            .catch((err) => {
                console.log(err);
                this.setState({ loading: false });
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
