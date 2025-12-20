import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import './FeaturedStrip.css';

function FeaturedStrip({ items }) {
    const scrollRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer || isPaused) return;

        let scrollPosition = 0;
        const scrollSpeed = 0.5; // pixels per frame

        const scroll = () => {
            if (!isPaused) {
                scrollPosition += scrollSpeed;
                if (scrollContainer) {
                    scrollContainer.scrollLeft = scrollPosition;

                    // Reset scroll when reaching the end of first set
                    if (scrollPosition >= scrollContainer.scrollWidth / 2) {
                        scrollPosition = 0;
                    }
                }
            }
            requestAnimationFrame(scroll);
        };

        const animationId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationId);
    }, [isPaused]);

    const handleClick = () => {
        setIsPaused(true);
    };

    // Duplicate items for seamless loop
    const duplicatedItems = [...items, ...items];

    return (
        <div className="featured-strip">
            <div className="featured-scroll" ref={scrollRef}>
                <div className="featured-items">
                    {duplicatedItems.map((item, index) => (
                        <Link
                            key={`${item.id}-${index}`}
                            to={`/${item.category}/${item.id}`}
                            className="featured-item"
                            onClick={handleClick}
                        >
                            <div className="featured-circle">
                                <img
                                    src={item.coverImage}
                                    alt={item.title}
                                    className="featured-image"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FeaturedStrip;
