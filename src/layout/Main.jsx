import { Component } from "react"
import { Cards } from "../components/Cards";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [],
        }
    };

    componentDidMount() {
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=377f9cd0&s=matrix&page=1')
            .then(response => response.json())
            .then(data => {
                this.setState({ cards: data.Search })
            })
            // .catch(error => console.log('Ошибка:', error));
    }

    render() {
        const {cards} = this.state;
        return (
            <main className="container content main-content">
                {cards.length ? <Cards cards={cards} /> : 
                <h3>Loading...</h3>}
            </main>
        )
    }
}

export { Main }