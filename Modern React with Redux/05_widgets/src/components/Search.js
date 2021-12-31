import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Search = () => {
    const [term, setTerm] = useState('cat');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a 
                    className="ui button"
                    href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    {result.snippet}
                </div>
            </div>
        );
    });

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        return () => clearTimeout(timerId);
    }, [term]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            });

            setResults(data.query.search);
        }

        search();        
    }, [debouncedTerm]);

    return (
        <div className="ui form">
            <div>
                <label>Wiki search</label>
                <input value={term} className="input" onChange={e => setTerm(e.target.value)} />
                {renderedResults}
            </div>
        </div>
    );
}

export default Search;
