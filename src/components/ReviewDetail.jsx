import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import Footer from './Footer';
import './ReviewDetail.css';

function ReviewDetail({ data, category }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState(null);
    const audioRef = useRef(null);

    useEffect(() => {
        const foundItem = data.find(d => d.id === id);
        if (foundItem) {
            setItem(foundItem);
        } else {
            navigate(`/${category}`);
        }
    }, [id, data, navigate, category]);

    // Auto-play audio for "Someone to Stay" song with fade in/out
    useEffect(() => {
        if (category === 'songs' && item?.id === 'someonetostay' && audioRef.current) {
            const audio = audioRef.current;
            const targetVolume = 0.4; // 40% volume
            const fadeInDuration = 2000; // 2 seconds fade in
            const fadeOutDuration = 3000; // 3 seconds fade out
            const fadeOutStartTime = 3; // Start fade out 3 seconds before end

            // Start with volume at 0
            audio.volume = 0;

            // Fade in effect
            const fadeIn = () => {
                const fadeInInterval = 50; // Update every 50ms
                const volumeStep = (targetVolume / fadeInDuration) * fadeInInterval;

                const fadeInTimer = setInterval(() => {
                    if (audio.volume < targetVolume) {
                        audio.volume = Math.min(audio.volume + volumeStep, targetVolume);
                    } else {
                        clearInterval(fadeInTimer);
                    }
                }, fadeInInterval);

                return fadeInTimer;
            };

            // Fade out effect
            const fadeOut = () => {
                const fadeOutInterval = 50;
                const volumeStep = (targetVolume / fadeOutDuration) * fadeOutInterval;

                const fadeOutTimer = setInterval(() => {
                    if (audio.volume > 0) {
                        audio.volume = Math.max(audio.volume - volumeStep, 0);
                    } else {
                        clearInterval(fadeOutTimer);
                    }
                }, fadeOutInterval);
            };

            // Handle time update to trigger fade out near the end
            const handleTimeUpdate = () => {
                if (audio.duration - audio.currentTime <= fadeOutStartTime) {
                    fadeOut();
                    audio.removeEventListener('timeupdate', handleTimeUpdate);
                }
            };

            // Start playing and fade in
            audio.play()
                .then(() => {
                    fadeIn();
                    audio.addEventListener('timeupdate', handleTimeUpdate);
                })
                .catch(error => {
                    console.log('Audio autoplay prevented:', error);
                });

            // Cleanup
            return () => {
                audio.removeEventListener('timeupdate', handleTimeUpdate);
            };
        }
    }, [category, item]);

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
        <div className={`review-detail ${category === 'songs' && item.id === 'someonetostay' ? 'party-lights-bg' : ''}`}>
            <div className="review-detail-content">
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
                                {category === 'songs' && item.id === 'someonetostay' && (
                                    <audio ref={audioRef} style={{ display: 'none' }}>
                                        <source src="/devnith-space/music.mp3" type="audio/mpeg" />
                                    </audio>
                                )}
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
            </div>
            <Footer />
        </div>
    );
}

export default ReviewDetail;
