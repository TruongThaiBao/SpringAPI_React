import { useEffect, useState } from "react";
import "./App.css";
import Catalog from "./feature/Catalog";
import { Product } from "./model/Product";
import axios from "axios";
import Navbar from "./layout/Navbar";

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
      <Navbar></Navbar>

      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-3">
            <Catalog product={product}></Catalog>
          </div>
        ))}
      </div>
    </>
    
  );
}

export default App;
