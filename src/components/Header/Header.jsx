import React from 'react';
import s from "./Header.module.css"

const Header = (props) => {

    const selectCat = (cat) => {
        props.choseCat(cat)
        props.selectProduct(undefined)
    }

    return (
        <header className={s.header}>
            <div>
                {props.categories.map(category =>
                    <span onClick={ () => selectCat(category.name)} className={s.categories}> {category.name}</span>
                )}
            </div>
        </header>
    );
};

export default Header;