import { Component } from "react"

import { Cards } from "../components/Cards";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [],
            search: ''
        }
    };

    componentDidMount() {
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=377f9cd0&s=matrix')
            .then(response => response.json())
            .then(data => {
                this.setState({ cards: data.Search })
            })
    }

    searchMovies = (value) => {
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=377f9cd0&s=${value}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ cards: data.Search })
            })
    }

    render() {

        const { cards } = this.state;

        return (
            <main className="container content main-content">
                <Search searchMovies={this.searchMovies} />
                {cards.length ? <Cards cards={cards} /> :
                    <Preloader />}
            </main>
        )
    }
}

export { Main }