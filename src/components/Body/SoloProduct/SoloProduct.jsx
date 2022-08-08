import React, {useEffect, useState} from 'react';
import {useQuery} from "@apollo/client";
import {GET_ONE_PRODUCT} from "../../../querry/category";
import s from './SoloProduct.module.css'


const SoloProduct = (props) => {

    const [product, setProduct] = useState([])

    const {data: oneProductData, loading: oneProductLoading} = useQuery(GET_ONE_PRODUCT, {
        variables: {id: props.selectedProduct},
    })

    useEffect(() => {
            if (!oneProductLoading) {
                setProduct(oneProductData.product)
            }

        },
        [oneProductData]);

    return (
        <div className={s.main}>
            <div className={s.images}>{product.gallery}</div>
            <h2 className={s.params}>SoloItem {product.name} </h2>
        </div>
    );
};

export default SoloProduct;