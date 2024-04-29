const products = [
    {
        id: "qweewrt",
        name: "prod1",
        description: " Descript",
        price: 1200,
        stock: 5,
        catergory: "alitas",
        image: "/foto-alitas.jpg"
    },
    {
        id: "qwee231wrt",
        name: "prod2",
        description: " Descript",
        price: 1520,
        stock: 10,
        catergory: "patitas",
        image: "/foto-alitas.jpg"
    }
]

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000);
    })
}

export default getProducts