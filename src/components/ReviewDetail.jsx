import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from './Footer';
import './ReviewDetail.css';

function ReviewDetail({ data, category }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const foundItem = data.find(d => d.id === id);
        if (foundItem) {
            setItem(foundItem);
        } else {
            navigate(`/${category}`);
        }
    }, [id, data, navigate, category]);

    if (!item) return null;

    const renderStars = (rating) => {
        return '★'.repeat(rating) + '☆'.repeat(5 - rating);
    };

    const getCreatorLabel = () => {
        if (item.director) return 'Director';
        if (item.creator) return 'Creator';
        if (item.author) return 'Author';
        if (item.artist) return 'Artist';
        return 'Creator';
    };

    const getCreatorName = () => {
        return item.director || item.creator || item.author || item.artist;
    };

    const parseHighlightedText = (text) => {
        // Split text by highlight tags [[highlight:...]]
        const parts = text.split(/(\[\[highlight:.*?\]\])/g);

        return parts.map((part, index) => {
            // Check if this part is a highlight tag
            const highlightMatch = part.match(/\[\[highlight:(.*?)\]\]/);
            if (highlightMatch) {
                return (
                    <span key={index} className="highlight-text">
                        {highlightMatch[1]}
                    </span>
                );
            }
            return part;
        });
    };

    return (
        <div className="review-detail">
            <div className="container">
                <Link to={`/${category}`} className="back-link">
                    ← Back to {category}
                </Link>

                <div className="review-content">
                    <div className="review-poster">
                        <img
                            src={item.coverImage}
                            alt={item.title}
                            className="poster-image"
                        />
                    </div>

                    <div className="review-info">
                        <h1 className="review-title">{item.title}</h1>

                        <div className="review-meta">
                            <div className="meta-item">
                                <span className="rating rating-large">{renderStars(item.rating)}</span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-label">Year:</span>
                                <span className="meta-value">{item.year}</span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-label">Genre:</span>
                                <span className="meta-value">{item.genre}</span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-label">{getCreatorLabel()}:</span>
                                <span className="meta-value">{getCreatorName()}</span>
                            </div>
                            {item.type && (
                                <div className="meta-item">
                                    <span className="type-badge">{item.type.toUpperCase()}</span>
                                </div>
                            )}
                        </div>

                        <div className="review-text">
                            <h2>Review</h2>
                            <p>{parseHighlightedText(item.review)}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ReviewDetail;
