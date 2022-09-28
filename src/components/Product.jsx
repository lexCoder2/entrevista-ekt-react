import { deleteProduct } from "../services/product.service"


export const Product = ({user, setProducts}) => {
const onDeleteProduct =(id) =>{
    deleteProduct(id).then(res => setProducts(res))
}
    return (
        <div className="img-card">
            <div className="img-card-b">
                <div className="delete-button" onClick={() => onDeleteProduct(user.id)}>&times;</div>
                <div className="update-button">&#x270E;</div>
            </div>
            <div className="product-data">
                <div><span>nombre: </span>{user.productName}</div>
                <div><span>descripción: </span>{user.productDescription}</div>
            </div>
        </div>
    )
}