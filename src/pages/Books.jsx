import MediaGrid from '../components/MediaGrid';
import booksData from '../data/books.json';
import './Books.css';

function Books() {
    // Sort by date_added (most recent first)
    const sortedBooks = [...booksData].sort((a, b) =>
        new Date(b.date_added) - new Date(a.date_added)
    );

    return (
        <div className="books-page">
            <div className="container">
                <div className="page-header">
                    <h1>Books</h1>
                    <p className="page-description">
                        Reviews of literary fiction and contemporary works
                    </p>
                </div>

                <MediaGrid items={sortedBooks} category="books" />
            </div>
        </div>
    );
}

export default Books;
