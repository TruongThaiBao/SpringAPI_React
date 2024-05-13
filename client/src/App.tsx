import { useEffect, useState } from "react";
import "./App.css";
import Catalog from "./feature/Catalog";
import { Product } from "./model/Product";
import axios from "axios";
import BasicNavbar from "./layout/BasicNavbar";
import { Container } from "react-bootstrap";

const initialProducts: Product[] = [];

function App() {
  const [products, setProducts] = useState(initialProducts);

  // useEffect(() => {
  //   fetch("/api/products")
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data));
  // }, []);

  useEffect(() => {
    async function fetchProducts() {
      const res = await axios.get<Product[]>('/api/products');
      const data = res.data;

      setProducts(data);
      console.log(data);
    }
    fetchProducts();
  })
  

  return (
    <>
      <BasicNavbar></BasicNavbar>
      <Container>
      <Catalog products={products}></Catalog>

      </Container>
      
    </>
    
  );
}

export default App;
