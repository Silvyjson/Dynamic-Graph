import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { warningIcon } from "../assets/images";

const GraphCards = (props) => {
  const { title, rate, rate2, Number, Number2, graph } = props;
  const [showAllNumbers, setShowAllNumbers] = useState(false);
  const graphCardRef = useRef(null);

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
        <div>{graph}</div>
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
              {showAllNumbers ? "Hide Details" : "View Details"}
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
