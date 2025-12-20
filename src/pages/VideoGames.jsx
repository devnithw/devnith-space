import MediaGrid from '../components/MediaGrid';
import Footer from '../components/Footer';
import videogamesData from '../data/videogames.json';
import './VideoGames.css';

function VideoGames() {
    // Sort by rating (highest first), then by year (most recent first)
    const sortedData = [...videogamesData].sort((a, b) => {
        if (b.rating !== a.rating) {
            return b.rating - a.rating;
        }
        return b.year - a.year;
    });

    return (
        <div className="videogames-page">
            <div className="container">
                <div className="page-header">
                    <h1>Video Games</h1>
                    <p className="page-description">
                        My favorite video games across all platforms and genres.
                    </p>
                </div>

                <MediaGrid items={sortedData} category="videogames" />
            </div>
            <Footer />
        </div>
    );
}

export default VideoGames;
