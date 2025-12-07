import React, { useRef, useState, useEffect } from 'react';
import '../../style.css';
export const HorizontalCarousel = ({ items = [], renderItem }) => {
    const ref = useRef(null);
    const [canLeft, setCanLeft] = useState(false);
    const [canRight, setCanRight] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const update = () => {
            setCanLeft(el.scrollLeft > 5);
            setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
        };
        update();
        el.addEventListener('scroll', update);
        window.addEventListener('resize', update);
        return () => {
            el.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, [items]);

    const scrollBy = (dir = 1) => {
        const el = ref.current;
        if (!el) return;
        el.scrollBy({ left: Math.floor(el.clientWidth * 0.8) * dir, behavior: 'smooth' });
    };

    return (
        <div className="hc-wrapper">
            {canLeft && (
                <button className="hc-btn hc-left" onClick={() => scrollBy(-1)} aria-label="Scroll left">
                    ‹
                </button>
            )}
            {canRight && (
                <button className="hc-btn hc-right" onClick={() => scrollBy(1)} aria-label="Scroll right">
                    ›
                </button>
            )}

            <div className="hc-track" ref={ref}>
                {items.map(item => (
                    <div key={item.code || item.id || Math.random()} className="hc-item">
                        {renderItem ? renderItem(item) : null}
                    </div>
                ))}
            </div>
        </div>
    );
};