import React from 'react';
import s from './ItemList.module.css'

const ItemList = ({selectedCategory, products, selectProduct, selectedCurrency}) => {

    return (
        <div>
            <h2>
                {selectedCategory}
            </h2>
            <div className={s.itemList}>
                {products.map(product =>
                    <div key={product.id} className={s.item}>
                        <img onClick={() => selectProduct(product.id)} src={product.gallery[0]} alt='product'/>
                        <div>{product.name}</div>
                        <div>
                            {product.prices.find(elem => elem.currency.label === selectedCurrency.label).amount}
                            {selectedCurrency.symbol}
                        </div>
                    </div>
                )};
            </div>
        </div>
    );
};

export default ItemList;