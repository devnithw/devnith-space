import MediaGrid from '../components/MediaGrid';
import songsData from '../data/songs.json';
import './Songs.css';

function Songs() {
    // Sort by date_added (most recent first)
    const sortedSongs = [...songsData].sort((a, b) =>
        new Date(b.date_added) - new Date(a.date_added)
    );

    return (
        <div className="songs-page">
            <div className="container">
                <div className="page-header">
                    <h1>Songs</h1>
                    <p className="page-description">
                        Reviews of albums and musical works
                    </p>
                </div>

                <MediaGrid items={sortedSongs} category="songs" />
            </div>
        </div>
    );
}

export default Songs;
