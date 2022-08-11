import React from 'react';
import s from './HeaderCart.module.css'

const HeaderCart = ({cart, goToCart}) => {

    return (
        <div className={s.headerCart}>
            <div>{cart.map(elem => (
                <h2>{elem.id}</h2>
            ))}
            </div>
            <div>
                <button onClick={() => goToCart(true)}>
                    MAKE ORDER
                </button>
            </div>
        </div>
    );
};

export default HeaderCart;