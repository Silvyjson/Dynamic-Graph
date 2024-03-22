import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DynamicGraph from './Graph';
import { warningIcon } from '../assets/images';

const GraphCards = (props) => {
    const { title, rate, rate2, Number, Number2, view } = props;
    return (
        <section className='graph-card'>
            <span className='graph-title'>
                <h4>{title}</h4>
                <img src={warningIcon} alt="warning icon" />
            </span>

            <div className='details-container'>
                <DynamicGraph />

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
                    <div className="rate">
                        {rate2.map((group, index) => (
                            <div key={index}>
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
                )}

                {Number && (
                    <div className="graph-number-content">
                        {Number.map((item, index) => (
                            <span key={index}>
                                <p>{item.number}</p>
                                <div className='number-value'>{item.numberValue}</div>
                            </span>
                        ))}
                    </div>
                )}

                {Number2 && (
                    <div className='graph-number-content2'>
                        {Number2.map((item, index) => (
                            <span key={index} className="graph-content-value">
                                <div className='value-name'>
                                    <p className={item.className}>{item.symbol}</p>
                                    <div>{item.numberValue}</div>
                                </div>
                                <p>{item.number}</p>
                            </span>
                        ))}
                    </div>
                )}

                {view && (
                    <div className="view">
                       {view} <FontAwesomeIcon icon="fa-solid fa-angle-down" className="font-awesome" />
                    </div>
                )}
            </div>
        </section>
    );
};

export default GraphCards;
