import React from 'react';
import s from './HeaderCart.module.css'
import HeaderCartAttributes from "./HeaderCartAttributes/HeaderCartAttributes";

const HeaderCart = ({cart, goToCart, selectedCurrency, totalPrice, setCart}) => {


    const changeAttrib = (changedProduct) => {
        let newCart = cart.map(product =>
            product.id === changedProduct.id
            ? changedProduct
                : product
        )
        setCart(newCart)

    }


    return (
        <div className={s.headerCart}>
            <div className={s.cartTitle}>
                <span>My bag.</span>
                <span className={s.cartLength}>{cart.length} items</span>
            </div>
            <div>
                {cart.map(product => (
                    <div key={product.id} className={s.productBox}>
                        <div className={s.titleBox}>
                            <div className={s.brand}>
                                {product.brand}
                            </div>
                            <div className={s.name}>
                                {product.name}
                            </div>
                            <div className={s.price}>
                                {selectedCurrency.symbol}
                                {product.prices.find(elem =>
                                    elem.currency.label === selectedCurrency.label).amount}
                            </div>
                            <div>
                                <HeaderCartAttributes product={product} changeAttrib={changeAttrib}/>
                            </div>
                        </div>
                        <div className={s.imgBox}>
                            <img src={product.gallery[0]} alt='product'/>
                        </div>
                    </div>

                ))}
            </div>
            <div className={s.totalPriceBox}>
                <div className={s.total}>Total</div>
                <div className={s.totalPrice}>{totalPrice}</div>
                <div className={s.currencySymbol}>{selectedCurrency.symbol}</div>
            </div>
            <div className={s.buttonBox}>
                <button disabled className={s.iDontKnowButton}>
                    VIEW BAG
                </button>
                <button onClick={() => goToCart(true)} className={s.makeOrderButton}>
                    MAKE ORDER
                </button>
            </div>
        </div>
    );
};

export default HeaderCart;