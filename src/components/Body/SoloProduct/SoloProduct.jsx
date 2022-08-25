import React, {useEffect, useState} from 'react';
import {useQuery} from "@apollo/client";
import {GET_ONE_PRODUCT} from "../../../querry/category";
import s from './SoloProduct.module.css'
import Attributes from "./Attributes/Attributes";
import ProductImgs from "./ProductImgs/ProductImgs";


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
                <ProductImgs gallery={oneProduct.gallery}></ProductImgs>
            </div>
            <div className={s.params}>
                <div className={s.title}>
                    <h1>{oneProduct.brand}</h1>
                    <h2>{oneProduct.name} </h2>
                </div>
                <div>
                    <Attributes attributes={oneProduct.attributes}/>
                </div>
                <div className={s.price}>
                    <div>
                        Price:
                    </div>
                    {selectedCurrency.symbol}
                    {oneProduct.prices.find(elem =>
                        elem.currency.label === selectedCurrency.label).amount}
                </div>
                <button disabled={!oneProduct.inStock} className={s.addToCartBtn} onClick={() => addToCart(oneProduct)}>ADD TO CART</button>
                <div className={s.description} dangerouslySetInnerHTML={{__html: oneProduct.description}}/>
            </div>
        </div>
    );
};

export default SoloProduct;