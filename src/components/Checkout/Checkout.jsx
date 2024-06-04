import { useState } from "react"
import Form from "./Form"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore"
import db from "../../db/db.js"
import validateForm from "../../utils/validationYup.js"
import { toast } from "react-toastify"

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        name: "",
        phone: "",
        email: ""
    })

    const [idOrden, setIdOrder] = useState(null)
    const { cart, allPrice, clearCart } = useContext(CartContext)

    const handleChangeInput = (event) => {
        setDataForm({ ...dataForm, [event.target.name]: event.target.value })
    }

    const handleSubmitForm = async (event) => {
        event.preventDefault()
        const order = {
            buyer: { ...dataForm },
            products: [...cart],
            date: Timestamp.fromDate(new Date()),
            total: allPrice()
        }
        try {
            const response = await validateForm(dataForm)
            if (response.status === "success") {
                generateOrder(order)
            } else {
                toast.warning(response.message)
            }
        } catch (error) {
            toast.error(error)
        }
    }

    const generateOrder = (order) => {
        const orderRef = collection(db, "orders")
        addDoc(orderRef, order)
            .then((resp) => setIdOrder(resp.id))
            .catch((error) => toast.error(error))
            .finally(() => {
                updateStock()
                clearCart()
            })
    }

    const updateStock = () => {
        cart.map((prodCart) => {
            let quantity = prodCart.quantity
            delete prodCart.quantity
            const prodRef = doc(db, "products", prodCart.id)
            setDoc(prodRef, { ...prodCart, stock: prodCart.stock - quantity })
                .then(() => toast.success("Stock actualizado"))
                .catch((error) => toast.error(error))
        })
    }

    return (
        <div>
            {
                idOrden ? (
                    <div>
                        <h2>Orden generada con exito!</h2>
                        <p>Guarde el id de su orden: {idOrden}</p>
                    </div>
                ) : (
                    <Form
                        dataForm={dataForm}
                        handleChangeInput={handleChangeInput}
                        handleSubmitForm={handleSubmitForm} />
                )
            }
        </div>
    )
}

export default Checkout