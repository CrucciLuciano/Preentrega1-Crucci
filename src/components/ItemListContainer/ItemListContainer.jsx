import { useEffect, useState } from "react"
import ItemList from "./ItemList"

import useLoading from "../hooks/useLoading.jsx"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../db/db.js"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const { loading, showLoading, hiddenLoading, loadingScreen } = useLoading()
    const { idCategory } = useParams()

    const getProducts = () => {
        const productsRef = collection(db, "products")
        getDocs(productsRef)
            .then((productsDb) => {
                const data = productsDb.docs.map((product) => {
                    return { id: product.id, ...product.data() }
                })
                setProducts(data)
            })
    }

    const getProductsByCategory = () => {
        const productsRef = collection(db, "products")
        const q = query(productsRef, where("category", "==", idCategory))
        getDocs(q)
            .then((productsDb) => {
                const data = productsDb.docs.map((product) => {
                    return { id: product.id, ...product.data() }
                })
                setProducts(data)
            })
    }

    useEffect(() => {
        if (idCategory) {
            getProductsByCategory()
        } else {
            getProducts()
        }
    }, [idCategory])

    return (
        <div>
            <h2>{idCategory ? `Filtrado por categoria: ${idCategory}` : "Home"}</h2>
            {greeting}
            {loading ? loadingScreen : <ItemList products={products} />}
        </div>
    )
}

export default ItemListContainer