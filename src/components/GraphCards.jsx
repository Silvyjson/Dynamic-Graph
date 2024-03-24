import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { warningIcon } from "../assets/images";

const GraphCards = (props) => {
  const { title, rate, rate2, Number, Number2, src, pointerSRC } = props;
  const [showAllNumbers, setShowAllNumbers] = useState(false);
  const [pointerPosition, setPointerPosition] = useState('28.5%');
  const graphCardRef = useRef(null);

  useEffect(() => {
    const calculatePointerPosition = () => {
      if (rate && rate.length > 0) {
        const intervalId = setInterval(() => {
          const maxRate = Math.max(rate[0].rateNo, rate[1].rateNo, rate[2].rateNo);
          let position;

          if (maxRate === rate[0].rateNo) {
            position = '80%';
          } else if (maxRate === rate[1].rateNo) {
            position = '50%';
          } else {
            position = '10%';
          }

          setPointerPosition(position);
        }, 20000);
        return () => clearInterval(intervalId);
      }
    };

    calculatePointerPosition();

    if (!rate.rateNo) {
      const intervalId = setInterval(() => {
        const newPosition = Math.floor(Math.random() * 100);
        setPointerPosition(newPosition + '%');
      }, 20000);

      return () => clearInterval(intervalId);
    }
  }, [rate.rateNo]);


  const toggleShowAllNumbers = () => {
    setShowAllNumbers(!showAllNumbers);
  };

  const haddleGetMore = () => {
    toggleShowAllNumbers();
    if (graphCardRef.current) {
      graphCardRef.current.style.height = showAllNumbers ? "350px" : "100%";
    }
  };

  return (
    <section className="graph-card" ref={graphCardRef}>
      <span className="graph-title">
        <h4>{title}</h4>
        <img src={warningIcon} alt="warning icon" />
      </span>

      <div className="details-container">
        <div className='graph-section'>
          <img src={src} alt="wave-graph" />
          <div className='pointer'>
            <img
              src={pointerSRC}
              alt='pointer'
              className='circle'
              style={{ left: pointerPosition }}
            />
          </div>
        </div>
        {rate && (
          <div className="rate">
            {rate.map((item, index) => (
              <span key={index} className="rate-value">
                <b>{item.rateNo}</b>
                <div className={item.className}>{item.rateNoValue}</div>
              </span>
            ))}
          </div>
        )}

        {rate2 && (
          <div style={{ position: "relative" }}>
            <div className=" srate">
              {rate2.map((group, index) => (
                <div key={index} className="">
                  {Object.keys(group).map((key) => (
                    <div key={key} className="sR">
                      {group[key].map((value, idx) => (
                        <span key={idx}>{value}</span>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {Number && (
          <div className="graph-number-content">
            {Number.map((item, index) => (
              <span key={index}>
                <p>{item.number}</p>
                <div className="number-value">{item.numberValue}</div>
              </span>
            ))}
          </div>
        )}

        {Number2 && (
          <div className="graph-number-content2">
            {showAllNumbers
              ? Number2.map((item, index) => (
                <span key={index} className="graph-content-value">
                  <div className="value-name">
                    <p className={item.className}>{item.symbol}</p>
                    <div>{item.numberValue}</div>
                  </div>
                  <p>{item.number}</p>
                </span>
              ))
              : Number2.slice(0, 2).map((item, index) => (
                <span key={index} className="graph-content-value">
                  <div className="value-name">
                    <p className={item.className}>{item.symbol}</p>
                    <div>{item.numberValue}</div>
                  </div>
                  <p>{item.number}</p>
                </span>
              ))}
            <div className="view" onClick={haddleGetMore}>
              {showAllNumbers ? "View Less" : "View Details"}
              <FontAwesomeIcon
                icon={showAllNumbers ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"}
                className="font-awesome"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GraphCards;
