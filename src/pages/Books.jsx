import { useState } from 'react';
import MediaGrid from '../components/MediaGrid';
import booksData from '../data/books.json';
import './Books.css';

function Books() {
    const [filter, setFilter] = useState('all');

    const getFilteredData = () => {
        let data = filter === 'all' ? booksData : booksData.filter(item => item.type === filter);
        // Sort by date_added (most recent first)
        return data.sort((a, b) => new Date(b.date_added) - new Date(a.date_added));
    };

    const filteredData = getFilteredData();

    return (
        <div className="books-page">
            <div className="container">
                <div className="page-header">
                    <h1>Books</h1>
                    <p className="page-description">
                        Reviews of literary fiction and contemporary works
                    </p>
                </div>

                <div className="filter-tabs">
                    <button
                        className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
                        onClick={() => setFilter('all')}
                    >
                        All
                    </button>
                    <button
                        className={`filter-tab ${filter === 'fiction' ? 'active' : ''}`}
                        onClick={() => setFilter('fiction')}
                    >
                        Fiction
                    </button>
                    <button
                        className={`filter-tab ${filter === 'nonfiction' ? 'active' : ''}`}
                        onClick={() => setFilter('nonfiction')}
                    >
                        Non-Fiction
                    </button>
                </div>

                <MediaGrid items={filteredData} category="books" />
            </div>
        </div>
    );
}

export default Books;
