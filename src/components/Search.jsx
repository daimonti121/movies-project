import { useState } from 'react';

const Search = (props) => {
    const { searchMovies = Function.prototype } = props;

    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('all');

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            searchMovies(search, filter);

            setSearch('');
            setFilter('all');
        }
    };

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const handleChangeFilter = (e) => {
        setFilter(e.target.value);
    };

    return (
        <div className='row'>
            <div className='col s12'>
                <div className='input-field'>
                    <input
                        className='validate'
                        placeholder='search'
                        type='search'
                        name='search'
                        value={search}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                    />
                    <button
                        className='btn search-btn'
                        onClick={() => {
                            searchMovies(search, filter);
                            setFilter('all');
                            setSearch('');
                        }}
                    >
                        Search
                    </button>
                </div>
                <div className='input-field display-flex'>
                    <p className='margin'>
                        <label>
                            <input
                                className='with-gap'
                                type='radio'
                                name='filter'
                                value='all'
                                checked={filter === 'all'}
                                onChange={handleChangeFilter}
                            />
                            <span>All</span>
                        </label>
                    </p>

                    <p className='margin'>
                        <label>
                            <input
                                className='with-gap'
                                type='radio'
                                name='filter'
                                value='movie'
                                checked={filter === 'movie'}
                                onChange={handleChangeFilter}
                            />
                            <span>Movies only</span>
                        </label>
                    </p>

                    <p className='margin'>
                        <label>
                            <input
                                className='with-gap'
                                type='radio'
                                name='filter'
                                value='series'
                                checked={filter === 'series'}
                                onChange={handleChangeFilter}
                            />
                            <span>Series only</span>
                        </label>
                    </p>
                </div>
            </div>
        </div>
    );
};

export { Search };
