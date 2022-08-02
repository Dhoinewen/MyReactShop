import React, {useEffect, useState} from 'react';
import {useQuery} from "@apollo/client";
import {GET_ONE_PRODUCT} from "../../../querry/category";


const SoloProduct = (props) => {

    const [product, setProduct] = useState([])

    const {data: oneProductData, loading: oneProductLoading} = useQuery(GET_ONE_PRODUCT, {
        variables: {id: props.selectedProduct},
    })

    console.log(product)

    useEffect(() => {
            if (!oneProductLoading) {
                setProduct(oneProductData.product)
            }

        },
        [oneProductData]);

    return (
        <div>
            <h2>SoloItem {product.name}</h2>
        </div>
    );
};

export default SoloProduct;