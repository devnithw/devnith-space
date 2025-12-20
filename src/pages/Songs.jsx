import MediaGrid from '../components/MediaGrid';
import songsData from '../data/songs.json';
import './Songs.css';

function Songs() {
    return (
        <div className="songs-page">
            <div className="container">
                <div className="page-header">
                    <h1>Songs</h1>
                    <p className="page-description">
                        Reviews of albums and musical works
                    </p>
                </div>

                <MediaGrid items={songsData} category="songs" />
            </div>
        </div>
    );
}

export default Songs;
