import React from 'react';
import s from './Cart.module.css'

import "swiper/css";
import "swiper/css/navigation";
import CartAttributes from "./CartAttrubutes/CartAttributes";


const Cart = ({cart, selectedCurrency, totalPrice, setCart}) => {

    const changeAttrib = (changedProduct) => {
        let newCart = cart.map(product =>
            product.id === changedProduct.id
                ? changedProduct
                : product
        )
        setCart(newCart)

    }

    return (
        <div className={s.body}>
            <h2>CART</h2>
            {cart.map(product =>
                <div key={product.id}>
                    <hr/>
                    <div className={s.productBox}>
                        <div className={s.textBox}>
                            <div className={s.brand}>{product.brand}</div>
                            <div className={s.name}>{product.name}</div>
                            <div className={s.cost}>
                                {selectedCurrency.symbol}
                                {product.prices.find(elem =>
                                    elem.currency.label === selectedCurrency.label).amount}
                            </div>
                            <CartAttributes product={product} changeAttrib={changeAttrib}/>
                        </div>
                        <div className={s.addBox}></div>
                        <div className={s.imgBox}>
                            <div className={s.altBody}>
                                <img src={product.gallery[0]}/>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <hr/>
            <div className={s.totalBox}>
                <div className={s.tax}>
                    Tax 21%:
                    <a  className={s.someNumber}>{(totalPrice * 0.21).toFixed(2)}</a>
                </div>
                <div className={s.quantity}>
                    Quantity:
                    <a className={s.someNumber}>{cart.length}</a>
                </div>
                <div className={s.totalPrice}>
                    Total:
                    <a className={s.someNumber}>{totalPrice}</a>
                </div>
            </div>
            <button className={s.myBtn}>ORDER</button>
        </div>
    );
};

export default Cart;