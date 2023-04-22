import { consulta } from "../api/dummyJSON"


export const getDataEdited = async (url) => {

    const products = await consulta(url)

    const newProducts = products.products.map(item => ({
        id: item.id,
        title: item.title,
        description: item.description,
        price: item.price,
        image: item.images[0],
        brand: item.brand
    }))

    return newProducts

}