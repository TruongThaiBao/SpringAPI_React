import { useEffect, useState } from "react";
import Catalog from "./feature/Catalog";
import { Product } from "./model/Product";
import axios from "axios";
import BasicNavbar from "./layout/BasicNavbar";
import { Button, Container } from "react-bootstrap";
import ProductForm from "./feature/product/ProductForm";
import "bootswatch/dist/journal/bootstrap.min.css";
import ProductPage from "./feature/product/ProductPage";
import { Route, Routes } from "react-router-dom";
import HomePage from "./feature/home/HomePage";
import AboutPage from "./feature/about/AboutPage";
import Contact from "./feature/contact/Contact";
import ProductDetail from "./feature/product/ProductDetail";

const initialProducts: Product[] = [];

function App() {
  const [products, setProducts] = useState(initialProducts);

  // useEffect(() => {
  //   fetch("/api/products")
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data));
  // }, []);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    async function fetchProducts() {
      const res = await axios.get<Product[]>('/api/products');
      const data = res.data;

      setProducts(data);
    }
    fetchProducts();
  }, [])
  
  const addProduct = (data: Product) => {
    setProducts((previousState) => [...previousState, {...data}]);
  };

  return (
    <>
      {/* <Container data-bs-theme="dark"
        className={`d-flex flex-column justify-content-center 
        align-items-center ${isDarkMode ? 
        'bg-dark text-light' : 'bg-light'}`}
        style={{ minHeight: '70vh' }}
      >
        <Button variant="primary" onClick={toggleDarkMode}>
          Toggle Theme
        </Button>
      </Container> */}
      <BasicNavbar></BasicNavbar>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="catalog" element={<Catalog products={products}/>}/>
        <Route path="catalog/:productId" element={<ProductDetail/>}/>
        <Route path="about" element={<AboutPage/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="manage-product" element={<ProductPage/>}/>
      </Routes>

      
    </>
    
  );
}

export default App;
