import './App.css';
import {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import {GET_ALL_CATEGORIES, GET_ALL_CURRENCIES, GET_ONE_CAT} from "./querry/category";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Cart from "./components/Cart/Cart";


function App() {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [selectedCategory, setSelectedCategory] = useState()
    const [selectedProduct, setSelectedProduct] = useState(undefined)
    const [currencies, setCurrencies] = useState([])
    const [selectedCurrency, setSelectedCurrency]= useState()
    const [cart, setCart] = useState([])
    const [orderPageIsOpen, setOrderPageIsOpen] = useState(false)



    const {data: dataTech, loading: loadingTech} = useQuery(GET_ONE_CAT, {
        variables: {cat: selectedCategory},
    });

    const {data, loading, error} = useQuery(GET_ALL_CATEGORIES)
    const {data: currenciesData, loading: currenciesLoading} = useQuery(GET_ALL_CURRENCIES)


    useEffect(() => {
            if (!loading) {
                setCategories(data.categories)
            }

        },
        [data])

    useEffect(() => {
            if (selectedCategory === undefined) {
                setProducts(undefined)
            }
            if (!loadingTech) {
                setProducts(dataTech.category.products)
            }
        },
        [dataTech])

    useEffect(() => {
            if (!currenciesLoading) {
                setCurrencies(currenciesData.currencies)
                setSelectedCurrency(currenciesData.currencies[0])
            }
        },
        [currenciesData])

    useEffect(() => {
    }, [selectedCategory])

    const choseCat = num => {
        setSelectedCategory(num);
    };

    const selectProduct = productId => {
        setSelectedProduct(productId);
    };


    if (loading) {
        return <h2>Loading...</h2>
    }

    if (error) return (
        <h2>Data error</h2>
    )

    if (currenciesLoading) {
        return <h2>Loading...</h2>
    }

    if (selectedCurrency === undefined) {
        return <h2>Loading...</h2>
    }

    const selectCurrency = (label) => {
        setSelectedCurrency(currencies.find(elem => elem.label === label.split(' ')[1]))
    }

    const addToCart = (product) => {
        setCart([...cart, product])
    }

    const goToCart = (isOpened) => {
        setOrderPageIsOpen(isOpened)
    }

    return (
        <div className="App">
            <Header
                categories={categories}
                choseCat={choseCat}
                selectProduct={selectProduct}
                currencies = {currencies}
                onChangeCurrency = {e => selectCurrency(e.target.value)}
                cart={cart}
                goToCart={goToCart}
                selectedCategory={selectedCategory}

            />
            <Body products={products}
                  selectedCategory={selectedCategory}
                  selectProduct={selectProduct}
                  selectedProduct={selectedProduct}
                  selectedCurrency={selectedCurrency}
                  setCart={setCart}
                  addToCart={addToCart}
                  orderPageIsOpen={orderPageIsOpen}
            />
        </div>
    );
}

export default App;
