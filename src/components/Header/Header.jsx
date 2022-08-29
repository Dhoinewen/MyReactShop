import React, {useState} from 'react';
import s from "./Header.module.css"
import CurrenciesChose from "./CurrenciesChose/CurrenciesChose";
import HeaderCart from "./HeaderCart/HeaderCart";

const Header = ({
                    choseCat,
                    selectProduct,
                    categories,
                    currencies,
                    onChangeCurrency,
                    cart,
                    goToCart,
                    selectedCategory,
                    selectedCurrency,
                    totalPrice
                }) => {

    const [openHeaderCart, setOpenHeaderCart] = useState(false)

    const selectCat = (cat) => {
        choseCat(cat)
        selectProduct(undefined)
        goToCart(false)
    }

    const cartIsOpen = () => {
        if (openHeaderCart) {
            return <HeaderCart cart={cart} goToCart={goToCart} selectedCurrency={selectedCurrency}
                               totalPrice={totalPrice}/>
        }
    }

    const categoryIsSelect = (name) => {
        if (name === selectedCategory) {
            return s.selectedCategoryBlock
        } else {
            return s.categoryBlock
        }
    }

    return (
        <header className={s.header}>
            <div className={s.categoriesBlock}>
                {categories.map(category =>
                        <span className={categoryIsSelect(category.name)} key={category.name}>
                    <button key={category.name} onClick={() => selectCat(category.name)}
                            className={s.categories}> {category.name}
                    </button>
                </span>
                )}
            </div>
            <div className={s.cart} onClick={() => setOpenHeaderCart(prev => !prev)}>
                <div className={s.cartLength}>
                    <a>{cart.length}</a>
                </div>
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