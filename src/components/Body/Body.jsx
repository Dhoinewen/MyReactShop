import React from 'react';
import s from "./Body.module.css";
import ItemList from "./ItemList/ItemList";
import SoloProduct from "./SoloProduct/SoloProduct";

const Body = ({selectedProduct, products, selectedCategory, selectProduct, selectedCurrency, addToCart}) => {

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


    return (

        <div className={s.body}>
            {content}

        </div>
    );
};

export default Body;