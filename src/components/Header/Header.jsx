import React from 'react';
import s from "./Header.module.css"
import CurrenciesChose from "./CurrenciesChose/CurrenciesChose";

const Header = ({choseCat, selectProduct, categories, currencies, onChangeCurrency}) => {

    const selectCat = (cat) => {
        choseCat(cat)
        selectProduct(undefined)
    }

    return (
        <header className={s.header}>
            <div>
                {categories.map(category =>
                    <div onClick={() => selectCat(category.name)} className={s.categories}> {category.name}</div>
                )}
            </div>
            <div className={s.currencies}>
                <CurrenciesChose currencies={currencies} onChangeCurrency={onChangeCurrency}
                                 />
            </div>
        </header>
    );
};

export default Header;