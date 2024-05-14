const products = [
    {
        id: "qweewrt",
        name: "Alitas Pollo",
        description: "alitas",
        price: 1200,
        stock: 5,
        category: "alitas",
        image: "/fotoalitas.png"
    },
    {
        id: "qwee231wrt",
        name: "Patitas de Pollo",
        description: "patitas",
        price: 1520,
        stock: 10,
        category: "patitas",
        image: "/pollofrito.png"
    },
    {
        id: "qwee23w",
        name: "Patitas de Gallina",
        description: "patitas",
        price: 1100,
        stock: 10,
        category: "patitas",
        image: "/patasGallina.png"
    },
    {
        id: "qwfghgdhwrt",
        name: "Alitas Gallina",
        description: "alitas",
        price: 1200,
        stock: 5,
        category: "alitas",
        image: "/alitas.png"
    },
    {
        id: "rgdfgs123",
        name: "Hamburguesa Pollo",
        description: "Hamburguesa",
        price: 1850,
        stock: 7,
        category: "hamburguesa",
        image: "/hbgpollo2.png"
    },
]

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000);
    })
}


const findProd = (id) => { return products.find(product => product.id === id) }

const getProductsByID = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(findProd(id))
        }, 1000);
    })
}

export { getProducts, getProductsByID } 