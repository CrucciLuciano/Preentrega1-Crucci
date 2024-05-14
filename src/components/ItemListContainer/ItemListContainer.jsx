import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { getProducts } from "../data/data.js"
import useLoading from "../hooks/useLoading.jsx"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const { loading, showLoading, hiddenLoading, loadingScreen } = useLoading()
    const { idCategory } = useParams()

    useEffect(() => {
        showLoading()
        getProducts()
            .then((data) => {
                if (idCategory) {
                    const productsFilter = data.filter((productRes) => productRes.category === idCategory)
                    setProducts(productsFilter)
                } else {
                    setProducts(data)
                }
            })
            .catch((error) => {
                console.error(error)
            })
            .finally(() => {
                hiddenLoading()
            })
    }, [idCategory])

    return (
        <div>
            {greeting}
            {loading ? loadingScreen : <ItemList products={products} />}
        </div>
    )
}

export default ItemListContainer