import React from 'react';
import s from './ItemList.module.css'

const ItemList = (props) => {

    return (
        <div>
            <h2>
                {props.category}
            </h2>
            <div className={s.itemList}>
                {props.products.map(tech =>

                    <div key={tech.id} className={s.item}>
                        {tech.name}
                        <img onClick={() => props.selectProduct(tech.id)} src={tech.gallery[0]} alt='product'/>

                    </div>
                )};
            </div>
        </div>
    );
};

export default ItemList;