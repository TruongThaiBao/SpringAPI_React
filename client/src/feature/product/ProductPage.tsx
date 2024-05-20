import React, { useEffect, useState } from "react";
import ProductForm from "./ProductForm";
import { Product } from "../../model/Product";
import axios from "axios";
import { Table } from "react-bootstrap";

const initialProducts: Product[] = [];

const ProductPage = () => {
  const [products, setProducts] = useState(initialProducts);

  useEffect(() => {
    async function fetchProducts() {
      const res = await axios.get<Product[]>("/api/products");
      const data = res.data;

      setProducts(data);
    }
    fetchProducts();
  }, []);

  const addProduct = (data: Product) => {
    setProducts((previousState) => [...previousState, { ...data }]);
  };

  return (
    <>
    <ProductForm onAddProduct={addProduct}></ProductForm>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
            {products.map((product, index) => (
                <tr key={index}>
                <td>{index}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.unitPrice}</td>
              </tr>
            ))};
          

        </tbody>
      </Table>
    </>
  );
};

export default ProductPage;
