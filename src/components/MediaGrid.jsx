import { Link } from 'react-router-dom';
import './MediaGrid.css';

function MediaGrid({ items, category }) {
    const renderStars = (rating) => {
        return '★'.repeat(rating) + '☆'.repeat(5 - rating);
    };

    return (
        <div className="media-grid-container">
            <div className="grid grid-4">
                {items.map((item) => (
                    <Link
                        key={item.id}
                        to={`/${category}/${item.id}`}
                        className="card"
                    >
                        <img
                            src={item.coverImage}
                            alt={item.title}
                            className={`card-image ${category === 'songs' ? 'card-image-square' : ''}`}
                            loading="lazy"
                        />
                        {category === 'songs' && (
                            <div className="card-content">
                                <h3 className="card-title card-title-sans">{item.title}</h3>
                                <p className="card-artist">{item.artist}</p>
                            </div>
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default MediaGrid;
