import MediaGrid from '../components/MediaGrid';
import booksData from '../data/books.json';
import './Books.css';

function Books() {
    return (
        <div className="books-page">
            <div className="container">
                <div className="page-header">
                    <h1>Books</h1>
                    <p className="page-description">
                        Reviews of literary fiction and contemporary works
                    </p>
                </div>

                <MediaGrid items={booksData} category="books" />
            </div>
        </div>
    );
}

export default Books;
