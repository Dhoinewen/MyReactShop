import React from 'react';
import s from './ItemList.module.css'

const ItemList = ({selectedCategory, products, selectProduct, selectedCurrency}) => {

    const inStock = (product) => {
        if (product.inStock) {
            return s.item
        } else {
            return s.outOfStockItem
        }
    }

    return (
        <div>
            <h2>
                {selectedCategory}
            </h2>
            <div className={s.itemList}>
                {products.map(product =>
                    <div key={product.id} className={inStock(product)}>
                        <h2>Out of stock</h2>
                        <img onClick={() => selectProduct(product.id)} src={product.gallery[0]} alt='product'/>
                        <div>{product.name}</div>
                        <div>
                            {selectedCurrency.symbol}
                            {product.prices.find(elem =>
                            elem.currency.label === selectedCurrency.label).amount}
                        </div>
                    </div>
                )};
            </div>
        </div>
    );
};

export default ItemList;