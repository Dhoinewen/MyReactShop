import React from 'react';
import s from './CurrenciesChose.module.css'

const CurrenciesChose = ({currencies, onChangeCurrency}) => {


    return (
        <div>
            <select onChange={onChangeCurrency}>
                {currencies.map(currency => (
                        <option key={currency.label}>{currency.symbol} {currency.label}</option>
                    ))}
            </select>
        </div>
    );
};

export default CurrenciesChose;