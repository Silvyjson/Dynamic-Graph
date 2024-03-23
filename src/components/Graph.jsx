import React, { useState } from 'react';

const DynamicGraph = (props) => {
    const { className, src, pointerSRC } = props;

    const [circlePosition, setCirclePosition] = useState({ x: 62, y: 0 });
    const [isDragging, setIsDragging] = useState(false);

    const handleMouseDown = (event) => {
        setIsDragging(true);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (event) => {
        if (isDragging) {
            const rect = event.currentTarget.getBoundingClientRect();
            const newX = event.clientX - rect.left - 5;
            const newY = event.clientY - rect.top - 35;
            if (newX >= 0 && newX <= rect.width && newY >= 0 && newY <= rect.height) {
                setCirclePosition({ x: newX, y: newY });
            }
        }
    };

    return (
        <section className='graph-section'>
            <img src={src} alt="wave-graph" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} />
            <div className='pointer'>
                <img
                    src={pointerSRC}
                    alt='pointer'
                    className='circle'
                    style={{ top: circlePosition.y, left: circlePosition.x }}
                    onMouseDown={handleMouseDown}
                />
            </div>
        </section>
    );
};

export default DynamicGraph;
