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
            <h2 className={s.selectedCategory}>
                {selectedCategory}
            </h2>
            <div className={s.itemList}>
                {products.map(product =>
                    <div key={product.id} className={inStock(product)} onClick={() => selectProduct(product.id)} >
                        <h2>Out of stock</h2>
                        <img src={product.gallery[0]} alt='product'/>
                        <div className={s.addCart} onClick={() => console.log('hu')}>
                            <img
                                className={s.addCartIcon}
                                alt='cartIcon'
                                src='https://cdn-icons.flaticon.com/png/512/2211/premium/2211008.png?token=exp=1660137034~hmac=d99bc066d18413251572fa2e4f1ddc9f'
                            />
                        </div>
                        <div className={s.productName}>{product.name}</div>
                        <div className={s.cost}>
                            {selectedCurrency.symbol}
                            {product.prices.find(elem =>
                            elem.currency.label === selectedCurrency.label).amount}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ItemList;