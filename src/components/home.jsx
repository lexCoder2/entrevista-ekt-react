import { useState, useEffect } from "react";
import { getProducts } from "../services/product.service";

import UserService from "../services/user.service";
import { AddProduct } from "./addProduct";
import { Product } from "./Product";


const Home = () => {
  const [content, setContent] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [products, setproducts] = useState([]);
  
  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response);
      }).catch(err => console.log(err));
  }, [])

  useEffect(() => {
    getProducts().then(products=> {
      if (products)
      setproducts(products)
    })
  }, [])
  return (
    <div className="main-page">
      <header className="header-home">
        <h3>Productos</h3>
        <button className="add-button" onClick={() => setIsOpen(true)}>+</button>
      </header>
      <main>
        {isOpen && <AddProduct isOpen={setIsOpen} setProducts={setproducts}/>}
        {products.map((product, i) => <Product key={product.id} user={product} setProducts={setproducts}></Product>)}
      </main>
    </div>
  );
};

export default Home;
