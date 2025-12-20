import { Link } from 'react-router-dom';
import cinemaData from '../data/cinema.json';
import booksData from '../data/books.json';
import songsData from '../data/songs.json';
import './Home.css';

function Home() {
    const renderStars = (rating) => {
        return '★'.repeat(rating) + '☆'.repeat(5 - rating);
    };

    const getFeaturedItems = () => {
        // Get 3 items from each category
        const cinema = cinemaData.slice(0, 3);
        const books = booksData.slice(0, 3);
        const songs = songsData.slice(0, 3);

        return { cinema, books, songs };
    };

    const featured = getFeaturedItems();

    return (
        <div className="home">
            <section className="hero">
                <div className="container">
                    <h1 className="hero-title">Devnith's Space</h1>
                    <p className="hero-subtitle">
                        A personal collection of reviews on cinema, literature, and music.
                    </p>
                </div>
            </section>

            <section className="featured-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Featured Cinema</h2>
                        <Link to="/cinema" className="view-all">View All →</Link>
                    </div>
                    <div className="grid grid-3">
                        {featured.cinema.map((item) => (
                            <Link
                                key={item.id}
                                to={`/cinema/${item.id}`}
                                className="card"
                            >
                                <img
                                    src={item.coverImage}
                                    alt={item.title}
                                    className="card-image"
                                    loading="lazy"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="featured-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Featured Books</h2>
                        <Link to="/books" className="view-all">View All →</Link>
                    </div>
                    <div className="grid grid-3">
                        {featured.books.map((item) => (
                            <Link
                                key={item.id}
                                to={`/books/${item.id}`}
                                className="card"
                            >
                                <img
                                    src={item.coverImage}
                                    alt={item.title}
                                    className="card-image"
                                    loading="lazy"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="featured-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Featured Albums</h2>
                        <Link to="/songs" className="view-all">View All →</Link>
                    </div>
                    <div className="grid grid-3">
                        {featured.songs.map((item) => (
                            <Link
                                key={item.id}
                                to={`/songs/${item.id}`}
                                className="card"
                            >
                                <img
                                    src={item.coverImage}
                                    alt={item.title}
                                    className="card-image-square card-image"
                                    loading="lazy"
                                />
                                <div className="card-content">
                                    <h3 className="card-title">{item.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
