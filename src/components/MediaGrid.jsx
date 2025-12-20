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
                            className="card-image"
                            loading="lazy"
                        />
                        <div className="card-content">
                            <h3 className="card-title">{item.title}</h3>
                            <div className="card-meta">
                                <span className="rating">{renderStars(item.rating)}</span>
                                <span className="text-muted"> • {item.year}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default MediaGrid;
