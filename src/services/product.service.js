
import {v4 as uuid} from "uuid"; 

export const getProducts = () => { 
    return Promise.resolve( JSON.parse(localStorage.getItem("products")))
    //axios.get(API_URL + "product", { headers: authHeader() });
  };

export const getProduct = (idProduct) => {
    return new Promise((resolve, rej) =>{
        const products = JSON.parse(localStorage.getItem("products"))
        if (products && Array.isArray(products)){
            resolve( products.find(product => product.id == idProduct))
        } else rej(null)

    })
    //axios.get(API_URL + "product/" + idProduct, { headers: authHeader() });
  };
export const updateProduct = (idProduct) => { 
    return new Promise((res, rej) =>{
        const products = JSON.parse(localStorage.getItem("products"))

    })
    
    //axios.put(API_URL + "product", { headers: authHeader() });
  };
export const createProduct = (product) => { 
    return new Promise((resolve, rej) =>{
        let newProducts = []
        const products = JSON.parse(localStorage.getItem("products"))
        console.log (products)
        product.id = uuid()
        if (products && Array.isArray(products)){
             products.push(product)
             newProducts = products
        } else {
            newProducts.push(product)
        }
        localStorage.setItem('products',JSON.stringify( newProducts))
        resolve(newProducts)
    })
};

  export const deleteProduct = (idProduct) => { 
    return new Promise((resolve, rej) =>{
        const products = JSON.parse(localStorage.getItem("products"))
        if (products && Array.isArray(products)){
            console.log(idProduct, products)
            const newProducts = products.filter(product => product.id !== idProduct)
            localStorage.setItem('products', JSON.stringify(newProducts))

            resolve(newProducts )
        } else rej(null)
    })
    //axios.get(API_URL + "product", { headers: authHeader() });
  };