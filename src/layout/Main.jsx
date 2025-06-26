import { useState, useEffect } from 'react';

import { Cards } from '../components/Cards';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

const API_KEY = import.meta.env.VITE_API_KEY;

const Main = () => {
    const [cards, setCards] = useState([]);
    // const [search, setSearch] = useState('');
    // const [filter, setFilter] = useState('');
    const [loading, setLoading] = useState(true);

    const searchMovies = (value, filter = 'all') => {
        setLoading(true);
        fetch(
            `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${value}${
                filter !== 'all' ? `&type=${filter}` : ''
            }`
        )
            .then((response) => response.json())
            .then((data) => {
                setCards(data.Search);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetch(
            `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=mad max`
        )
            .then((response) => response.json())
            .then((data) => {
                setCards(data.Search);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);
    
    return (
        <main className='container content main-content'>
            <Search searchMovies={searchMovies} />
            {loading ? <Preloader /> : <Cards cards={cards} />}
        </main>
    );
};

export { Main };
