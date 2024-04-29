import getProducts from "../data/data"
import { useEffect, useState } from "react"
import ItemList from "./ItemList"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then((data) => {
                setProducts(data)
            })
            .catch((error) => {
                console.error(error)
            })
            .finally(() => {
                console.log("finalizo la promesa")
            })
    }, [])

    return (
        <div>{greeting}
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer