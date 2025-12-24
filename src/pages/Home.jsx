import FeaturedStrip from '../components/FeaturedStrip';
import Footer from '../components/Footer';
import cinemaData from '../data/cinema.json';
import booksData from '../data/books.json';
import songsData from '../data/songs.json';
import './Home.css';

function Home() {
    // Combine all media and select 10 random items
    const allMedia = [
        ...cinemaData.map(item => ({ ...item, category: 'cinema' })),
        ...booksData.filter(item => item.type === 'fiction').map(item => ({ ...item, category: 'books' })),
        ...songsData.map(item => ({ ...item, category: 'songs' }))
    ];

    // Shuffle and take 10 random items
    const shuffled = [...allMedia].sort(() => Math.random() - 0.5);
    const randomMedia = shuffled.slice(0, 10);

    return (
        <div className="home">
            <section className="hero">
                <div className="container">
                    <h1 className="hero-title">Devnith's Space</h1>
                    <p className="hero-subtitle">
                        A collection of reviews on cinema, books, and music. These are my personal favourites and may not be the highest rated or popular :)
                    </p>
                    <div className="currently-watching">
                        <span className="pulse-indicator"></span>
                        <span className="watching-text">Currently watching: <span className="watching-title">Severance</span></span>
                    </div>
                </div>
            </section>

            <FeaturedStrip items={randomMedia} />

            <Footer />
        </div>
    );
}

export default Home;
