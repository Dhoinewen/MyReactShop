import React from 'react';
import s from "./Body.module.css";
import ItemList from "./ItemList/ItemList";
import SoloProduct from "./SoloProduct/SoloProduct";
import Cart from "../Cart/Cart";

const Body = ({selectedProduct, products, selectedCategory, selectProduct, selectedCurrency, addToCart, orderPageIsOpen}) => {

    let content

    if (products === undefined) {
        content = 'Chose category'
    }else {
        if (selectedProduct === undefined) {
            content = <ItemList products={products} selectedCategory={selectedCategory}
                                selectProduct={selectProduct} selectedCurrency={selectedCurrency}></ItemList>
        } else {
            content = <SoloProduct
                selectedProduct={selectedProduct}
                addToCart={addToCart}
                selectedCurrency={selectedCurrency}
            ></SoloProduct>
        }
    }

    if (orderPageIsOpen) {
        return (
            <div className={s.body}>
                <Cart/>
            </div>
        )
    }

    return (

        <div className={s.body}>
            {content}

        </div>
    );
};

export default Body;