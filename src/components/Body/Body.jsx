import React from 'react';
import s from "./Body.module.css";
import ItemList from "./ItemList/ItemList";
import SoloProduct from "./SoloProduct/SoloProduct";

const Body = (props) => {

    let content

    const selectedProduct = props.selectedProduct

    if (selectedProduct === undefined) {
        content = <ItemList products={props.products} category={props.selectedCategory}
                            selectProduct={props.selectProduct}></ItemList>
    } else {
        content = <SoloProduct selectedProduct={props.selectedProduct}></SoloProduct>
    }


    return (
        <div className={s.body}>
            {content}

        </div>
    );
};

export default Body;