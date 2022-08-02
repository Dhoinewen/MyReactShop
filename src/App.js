import './App.css';
import {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import {GET_ALL_CATEGORIES, GET_ONE_CAT} from "./querry/category";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";


function App() {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [selectedProduct, setSelectedProduct] = useState(undefined)


    const {data: dataTech, loading: loadingTech} = useQuery(GET_ONE_CAT, {
        variables: {cat: selectedCategory},
    });

    const {data, loading, error} = useQuery(GET_ALL_CATEGORIES)


    useEffect(() => {
            if (!loading) {
                setCategories(data.categories)
            }

        },
        [data])

    useEffect(() => {
            if (!loadingTech) {
                setProducts(dataTech.category.products)
            }
        },
        [dataTech])

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


    return (
        <div className="App">
            <Header
                categories={categories}
                choseCat={choseCat}
                selectProduct={selectProduct}

            >

            </Header>
            <Body products={products} category={selectedCategory} selectProduct={selectProduct}
                  selectedProduct={selectedProduct}></Body>
        </div>
    );
}

export default App;
