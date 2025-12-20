import FeaturedStrip from '../components/FeaturedStrip';
import Footer from '../components/Footer';
import cinemaData from '../data/cinema.json';
import booksData from '../data/books.json';
import './Home.css';

function Home() {
    const getRecentMedia = () => {
        // Combine cinema and books
        const combined = [
            ...cinemaData.map(item => ({ ...item, category: 'cinema' })),
            ...booksData.map(item => ({ ...item, category: 'books' }))
        ];

        // Sort by date_added (most recent first)
        combined.sort((a, b) => new Date(b.date_added) - new Date(a.date_added));

        // Return top 10
        return combined.slice(0, 10);
    };

    const recentMedia = getRecentMedia();

    return (
        <div className="home">
            <section className="hero">
                <div className="container">
                    <h1 className="hero-title">Devnith's Space</h1>
                    <p className="hero-subtitle">
                        A personal collection of reviews on cinema, literature, and music. These are selected items from my most preffered media.
                    </p>
                </div>
            </section>

            <FeaturedStrip items={recentMedia} />

            <Footer />
        </div>
    );
}

export default Home;
