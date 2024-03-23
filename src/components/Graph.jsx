import React, { useState, useEffect } from 'react';

const DynamicGraph = (props) => {
  const { src, pointerSRC } = props;

  const [pointerPosition, setPointerPosition] = useState(28.5);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newPosition = Math.floor(Math.random() * 90);
      setPointerPosition(newPosition);
    }, 20000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className='graph-section'>
      <img src={src} alt="wave-graph"/>
      <div className='pointer' style={{ left: `${pointerPosition}%` }}>
        <img
          src={pointerSRC}
          alt='pointer'
          className='circle'
        />
      </div>
    </section>
  );
};

export default DynamicGraph;
