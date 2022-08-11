import React from 'react';
import s from './HeaderCart.module.css'

const HeaderCart = ({cart}) => {

    return (
        <div className={s.headerCart}>
            {cart.map(elem => (
                <h2>{elem.id}</h2>
            ))}
        </div>
    );
};

export default HeaderCart;