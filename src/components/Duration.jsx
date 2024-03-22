import React, { useState } from 'react';

const Duration = () => {
    const duration = ["5min", "10min", "15min", "30min", "hour", "1 Day"];
    const initialSelectedIndex = duration.findIndex(item => item === "1 Day");
    const [selected, setSelected] = useState(initialSelectedIndex);

    const handleClick = (index) => {
        setSelected(index);
    };

    return (
        <div className='duration'>
            {duration.map((item, index) => (
                <p
                    key={index}
                    onClick={() => handleClick(index)}
                    className={selected === index ? 'bg-blue' : 'normal-style'}
                >
                    {item}
                </p>
            ))}
        </div>
    );
};

export default Duration;
