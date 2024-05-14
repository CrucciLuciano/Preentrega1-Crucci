import { useEffect, useState } from "react"
import { getProductsByID } from "../data/data.js"
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProducts] = useState([])
    const { idProduct } = useParams()
    useEffect(() => {
        getProductsByID(idProduct)
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
        <div>
            <ItemDetail product={product} />
        </div>
    )
}

export default ItemDetailContainer