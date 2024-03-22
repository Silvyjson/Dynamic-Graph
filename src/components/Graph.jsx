import React, { useState } from 'react';

const DynamicGraph = () => {
    const initialLengths = [45, 40, 37, 35, 33, 30, 28, 25, 20, 25, 28, 30, 33, 35, 37, 40, 45];

    const [lineLengths] = useState(initialLengths);
    const [circlePosition, setCirclePosition] = useState({ x: 59, y: 15 });
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
            const newX = event.clientX - rect.left - 5; // Adjust for circle size
            const newY = event.clientY - rect.top - 5; // Adjust for circle size
            if (newX >= 0 && newX <= rect.width && newY >= 0 && newY <= rect.height) {
                setCirclePosition({ x: newX, y: newY });
            }
        }
    };

    return (
        <section className='graph-section'>
            <div className="graph" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
                {lineLengths.map((length, index) => (
                    <div className="line" key={index} style={{ height: `${length}px` }}></div>
                ))}
            </div>
            <div className='pointer'>
                <span
                    className='circle'
                    style={{ top: circlePosition.y, left: circlePosition.x }}
                    onMouseDown={handleMouseDown}
                >
                    <span className='circle2'></span>
                </span>
            </div>
        </section>
    );
};

export default DynamicGraph;
