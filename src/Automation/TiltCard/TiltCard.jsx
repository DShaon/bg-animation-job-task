import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import "./TiltCard.css";

function TiltCard() {
    const [springProps, set] = useSpring(() => ({
        xys: [0, 0, 1],
        config: { mass: 10, tension: 350, friction: 30 }
    }));

    const cardRef = useRef(null);

    const handleMouseMove = (event) => {
        const rect = cardRef.current.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        set.start({ xys: [-(y - 0.5) * 20, (x - 0.5) * 20, 1.1] });
    };

    const handleMouseLeave = () => {
        set.start({ xys: [0, 0, 1] });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="cardContainer"
        >
            <animated.div
                className="card border-2 bg-gray-800"
                style={{
                    transform: springProps.xys.to(
                        (x, y, s) => `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
                    )
                }}
            >
                Your Card Content
            </animated.div>
        </div>
    );
}

export default TiltCard;
