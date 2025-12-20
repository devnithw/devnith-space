import { useState } from 'react';
import MediaGrid from '../components/MediaGrid';
import Footer from '../components/Footer';
import cinemaData from '../data/cinema.json';
import './Cinema.css';

function Cinema() {
    const [filter, setFilter] = useState('all');

    const getFilteredData = () => {
        let data = filter === 'all' ? cinemaData : cinemaData.filter(item => item.type === filter);
        // Sort by date_added (most recent first)
        return data.sort((a, b) => new Date(b.date_added) - new Date(a.date_added));
    };

    const filteredData = getFilteredData();

    return (
        <div className="cinema-page">
            <div className="container">
                <div className="page-header">
                    <h1>Cinema</h1>
                    <p className="page-description">
                        Best of films and television series in my rankings.
                    </p>
                    <a
                        href="https://letterboxd.com/devnithw/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        Follow me on
                        <svg className="social-icon" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="125" cy="250" r="125" fill="currentColor" fillOpacity="0.5" />
                            <circle cx="375" cy="250" r="125" fill="currentColor" fillOpacity="0.5" />
                            <circle cx="250" cy="250" r="125" fill="currentColor" />
                        </svg>
                        Letterboxd
                    </a>
                </div>

                <div className="filter-tabs">
                    <button
                        className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
                        onClick={() => setFilter('all')}
                    >
                        All
                    </button>
                    <button
                        className={`filter-tab ${filter === 'movie' ? 'active' : ''}`}
                        onClick={() => setFilter('movie')}
                    >
                        Movies
                    </button>
                    <button
                        className={`filter-tab ${filter === 'tv' ? 'active' : ''}`}
                        onClick={() => setFilter('tv')}
                    >
                        TV Shows
                    </button>
                </div>

                <MediaGrid items={filteredData} category="cinema" />
            </div>
            <Footer />
        </div>
    );
}

export default Cinema;
