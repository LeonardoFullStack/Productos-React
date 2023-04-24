import { consulta } from "../api/dummyJSON"


export const getDataEdited = async (url, viewOne) => {
    let newProducts;
    const products = await consulta(url)
    
    if (viewOne  == 'viewOne') {
        
        newProducts = {
            id: products.id,
            title: products.title,
            description: products.description,
            price: products.price,
            image: products.images[0],
            brand: products.brand,
            stock: products.stock,
            rating: products.rating,
            category: products.category
        }
        

    } else {
        newProducts = products.products.map(item => ({
            id: item.id,
            title: item.title,
            description: item.description,
            price: item.price,
            image: item.images[0],
            brand: item.brand
        }))

    }

     

    return newProducts

}