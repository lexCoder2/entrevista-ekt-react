
import { useState, useEffect, useRef } from "react";
import { useHref } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { createProduct } from "../services/product.service";
const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
};


export const AddProduct = ({isOpen, setProducts}) => {
    const [productName, setProductName] = useState()
    const [productDescription, setProductDescription] = useState()

    const form = useRef();
    const handleCreate = (e) =>{
        e.preventDefault();
        form.current.validateAll();
        createProduct({productName, productDescription}).then(res =>{
            setProducts(res)
            isOpen(false)
        })
    }

    const onChangeProductName = (e) => {
        const username = e.target.value;
        setProductName(username);
      };
    
      const onChangeProductDescription = (e) => {
        const password = e.target.value;
        setProductDescription(password);
      };
    
    return (
        <div className="modal-add">
            <div className="box-modal-add">

                <div className="header-modal-add">
                Nuevo producto
                <span className="delete-button" onClick={() => isOpen(false)}>&times;</span>
                </div>
                <div className="form-add">
                <Form onSubmit={handleCreate} ref={form}>
                    <div className="form-group row">
                        <label htmlFor="productName" className="col-sm-3 col-form-label">Nombre del producto: </label>
                        <div className="col-sm-9">
                        <Input onChange={onChangeProductName} validations={[required]} type="text" className="form-control" id="productName" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="description" className="col-sm-3 col-form-label">Descripción</label>
                        <div className="col-sm-9">
                        <Input className="form-control" onChange={onChangeProductDescription} id="description" />
                        </div>
                    </div>
                    <div className="form-group row">
                        
                        <div class="col-6">
                            <button type="submit" className="btn btn-primary">Agregar</button>
                        </div>
                    </div>
                    </Form>
                </div>
            </div>
            
        </div>
    )
}