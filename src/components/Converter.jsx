import React, { useState, useEffect } from 'react';
import { country_code } from '../data/country-list';

const Converter = () => {
    const [amount, setAmount] = useState(1);
    const [fromCurr, setFromCurr] = useState("USD");
    const [toCurr, setToCurr] = useState("KGS");
    const [resultText, setResultText] = useState("Exchange Rate will appear here");

    const API_KEY = "128b4900f036d9acf6988081";

    const getExchangeRate = async (e) => {
        if(e) e.preventDefault();
        
        setResultText("Getting exchange rate...");
        try {
            const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurr}`;
            const response = await fetch(url);
            const data = await response.json();
            const rate = data.conversion_rates[toCurr];
            const total = (amount * rate).toFixed(2);
            setResultText(`${amount} ${fromCurr} = ${total} ${toCurr}`);
        } catch (error) {
            setResultText("Something went wrong");
        }
    };

    const swapCurrencies = () => {
        setFromCurr(toCurr);
        setToCurr(fromCurr);
    };

    return (
        <div className="wrapper">
            <form onSubmit={getExchangeRate}>
                <div className="amount">
                    <input 
                        type="number" 
                        value={amount} 
                        onChange={(e) => setAmount(e.target.value)} 
                    />
                </div>
                <div className="drop-list">
                    <div className="from">
                        <p>From</p>
                        <div className="select-box">
                            <img src={`https://flagsapi.com/${country_code[fromCurr]}/flat/64.png`} alt="flag" />
                            <select value={fromCurr} onChange={(e) => setFromCurr(e.target.value)}>
                                {Object.keys(country_code).map(code => <option key={code} value={code}>{code}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="icon" onClick={swapCurrencies}>
                        <i className="fas fa-exchange-alt"></i>
                    </div>
                    <div className="to">
                        <p>To</p>
                        <div className="select-box">
                            <img src={`https://flagsapi.com/${country_code[toCurr]}/flat/64.png`} alt="flag" />
                            <select value={toCurr} onChange={(e) => setToCurr(e.target.value)}>
                                {Object.keys(country_code).map(code => <option key={code} value={code}>{code}</option>)}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="exchange-rate">
                    <span>{resultText}</span>
                </div>
                <button type="submit">Convert</button>
            </form>
        </div>
    );
};

export default Converter;