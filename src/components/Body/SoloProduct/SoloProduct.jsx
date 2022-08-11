import React, {useEffect, useState} from 'react';
import {useQuery} from "@apollo/client";
import {GET_ONE_PRODUCT} from "../../../querry/category";
import s from './SoloProduct.module.css'


const SoloProduct = ({selectedProduct, addToCart, selectedCurrency}) => {

    const [oneProduct, setOneProduct] = useState(undefined)

    const {data: oneProductData, loading: oneProductLoading} = useQuery(GET_ONE_PRODUCT, {
        variables: {id: selectedProduct},
    })

    useEffect(() => {
            if (!oneProductLoading) {
                setOneProduct(oneProductData.product)
            }

        },
        [oneProductData]);


    if (oneProductLoading) {
        return <h2>Loading...</h2>
    }

    if (oneProduct === undefined) {
        return <h2>Loading...</h2>
    }


    return (
        <div className={s.main}>
            <div className={s.images}>
                {oneProduct.gallery.map(imgs => <img key={imgs} alt='product' src={imgs}/> )}
            </div>
            <div className={s.params}>
                <h1>{oneProduct.brand}</h1>
                <h2>{oneProduct.name} </h2>
                <div>Price:</div>
                <div>
                    {selectedCurrency.symbol}
                    {oneProduct.prices.find(elem =>
                        elem.currency.label === selectedCurrency.label).amount}
                </div>
                <button className={s.addToCartBtn} onClick={() => addToCart(oneProduct)}>ADD TO CART</button>
                {oneProduct.description}
            </div>
        </div>
    );
};

export default SoloProduct;