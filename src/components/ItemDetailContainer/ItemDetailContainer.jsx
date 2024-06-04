import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import db from "../../db/db.js"
import { toast } from "react-toastify"
import useLoading from "../hooks/useLoading.jsx"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { idProduct } = useParams();
    const { loadingScreen } = useLoading()

    const getProduct = async () => {
        const productRef = doc(db, "products", idProduct);
        try {
            const productDb = await getDoc(productRef);
            if (productDb.exists()) {
                const data = { id: productDb.id, ...productDb.data() };
                setProduct(data);
            } else {
                setProduct(null); // Reiniciar el estado del producto
                toast.error("El producto no existe");
            }
        } catch (error) {
            toast.error(error);
        }
    }

    useEffect(() => {
        getProduct();
    }, [idProduct]); // Usar idProduct en la dependencia del useEffect

    return (
        <div>
            {product ? <ItemDetail product={product} /> : loadingScreen}
        </div>
    );
}


export default ItemDetailContainer