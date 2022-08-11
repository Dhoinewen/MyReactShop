import React, {useState} from 'react';
import s from "./Header.module.css"
import CurrenciesChose from "./CurrenciesChose/CurrenciesChose";
import HeaderCart from "./HeaderCart/HeaderCart";

const Header = ({choseCat, selectProduct, categories, currencies, onChangeCurrency, cart}) => {

    const [openCart, setOpenCart] = useState(false)

    const selectCat = (cat) => {
        choseCat(cat)
        selectProduct(undefined)
    }

    const cartIsOpen = () => {
        if (openCart) {
            return <HeaderCart cart={cart}/>
        }
    }

    return (
        <header className={s.header}>
            <div>
                {categories.map(category =>
                    <div key={category.name} onClick={() => selectCat(category.name)}
                         className={s.categories}> {category.name}</div>
                )}
            </div>
            <div className={s.cart} onClick={() => setOpenCart(prev => !prev)}>
                {cart.length}
                <img
                    className={s.cartIcon}
                    alt='cartIcon'
                    src='https://cdn-icons.flaticon.com/png/512/2211/premium/2211008.png?token=exp=1660137034~hmac=d99bc066d18413251572fa2e4f1ddc9f'
                />
            </div>
            <div className={s.currencies}>
                <CurrenciesChose
                    currencies={currencies}
                    onChangeCurrency={onChangeCurrency}
                />
            </div>
            {cartIsOpen()}
        </header>
    );
};

export default Header;