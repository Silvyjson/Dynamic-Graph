import React from 'react';
import GraphCards from './GraphCards';

const GraphCardData = () => {
    const cards = [
        {
            title: "Summary",
            rate: [
                { rateNo: "14", rateNoValue: "Bearish", className: "rate B" },
                { rateNo: "8", rateNoValue: "Neutral", className: "rate N"},
                { rateNo: "5", rateNoValue: "Bullish", className: "rate Bg" },
            ],
            Number: [
                { number: "22074.34", numberValue: "EMA (20)" },
                { number: "22164.35", numberValue: "SMA(20)" },
                { number: "41.60", numberValue: "RSI(14)" },
                { number: "-81.68", numberValue: "Awesome Osc" },
                { number: "13.49", numberValue: "Macci (12.26.9)" },
                { number: "-161.87", numberValue: "CCL (20)" },
            ],
        },
        {
            title: "Support & Resistance",
            rate2: [
                { s: ["S3", "S2", "S1"] },
                { r: ["R1", "R2", "R3"] }
            ],
            Number: [
                { number: "21576.17", numberValue: "S1" },
                { number: "21169.53", numberValue: "S2" },
                { number: "20402.23", numberValue: "S3" },
                { number: "22343.47", numberValue: "R1" },
                { number: "22704.13", numberValue: "R2" },
                { number: "23471.43", numberValue: "R3" },
            ],
        },
        {
            title: "Moving average",
            rate: [
                { rateNo: "11", rateNoValue: "Bearish", className: "rate Bo" },
                { rateNo: "2", rateNoValue: "Neutral", className: "rate N" },
                { rateNo: "4", rateNoValue: "Bullish", className: "rate Bh" },
            ],
            Number2: [
                { number: "21934.49", numberValue: "EMA (S)", symbol: "S", className: "symbol S" },
                { number: "21962.63", numberValue: "SMA (S)", symbol: "S", className: "symbol S" },
            ],
           view: "View Details",
        },
        {
            title: "Oscillators",
            rate: [
                { rateNo: "3", rateNoValue: "Bearish", className: "rate B" },
                { rateNo: "6", rateNoValue: "Neutral", className: "rate N" },
                { rateNo: "1", rateNoValue: "Bullish", className: "rate Bh" },
            ],
            Number2: [
                { number: "41.60", numberValue: "RSI(14)", symbol: "N", className: "symbol N" },
                { number: "7.32", numberValue: "Stoch%K(14.3.3)", symbol: "N", className: "symbol N" },
            ],
            view: "View Details",
        }
    ];

    return (
        <div className='graph-card-container'>
            {cards.map((card, index) => (
                <GraphCards key={index} {...card} />
            ))}
        </div>
    );
};

export default GraphCardData;
