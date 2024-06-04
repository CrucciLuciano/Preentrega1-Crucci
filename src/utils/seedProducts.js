import { addDoc, collection } from "firebase/firestore"
import db from "../db/db.js"

const products = [
    {
        id: "qweewrt",
        name: "Alitas Pollo",
        description: "Jugosas alitas de pollo, perfectamente sazonadas y crujientes. Ideales para compartir en cualquier ocasión. ¡Disfruta su delicioso sabor!",
        price: 1200,
        stock: 5,
        category: "alitas",
        image: "/fotoalitas.png"
    },
    {
        id: "qwee231wrt",
        name: "patitas",
        description: "Sabrosas patitas de pollo, crujientes por fuera y tiernas por dentro. Perfectas para un antojo irresistible y delicioso.",
        price: 1520,
        stock: 10,
        category: "patitas",
        image: "/pollofrito.png"
    },
    {
        id: "qwee23w",
        name: "patitas",
        description: "Exquisitas patitas de gallina, cocidas a la perfección y llenas de sabor. Ideales para sopas o como aperitivo nutritivo.",
        price: 1100,
        stock: 10,
        category: "patitas",
        image: "/patasGallina.png"
    },
    {
        id: "qwfghgdhwrt",
        name: "alitas",
        description: "Deliciosas alitas de gallina, crujientes y sazonadas a la perfección. Perfectas para cualquier ocasión y para compartir.",
        price: 1200,
        stock: 5,
        category: "alitas",
        image: "/alitas.png"
    },
    {
        id: "rgdfgs123",
        name: "Hamburguesa Pollo",
        description: "Jugosa hamburguesa de pollo, sazonada y cocinada a la perfección. Ideal para un almuerzo delicioso y nutritivo.",
        price: 1850,
        stock: 7,
        category: "hamburguesa",
        image: "/hbgpollo2.png"
    },
]

const seedProducts = () => {
    products.map(({ id, ...rest }) => {
        addDoc(collection(db, "products"), rest)
    })
}

seedProducts()