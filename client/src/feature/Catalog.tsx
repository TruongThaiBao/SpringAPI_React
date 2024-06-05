import { Container } from "react-bootstrap";
import { Product } from "../model/Product";
import CatalogItem from "./CatalogItem";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingComponent from "../layout/LoadingComponent";


const initialProducts: Product[] = [];

function Catalog() {
  const [products, setProducts] = useState(initialProducts);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const res = await axios.get<Product[]>('/api/products');
      const data = res.data;

      setProducts(data);
      setLoading(false);
    }
    fetchProducts();
  }, [])

  if (loading)
    return <LoadingComponent></LoadingComponent>

  return (
    <>
    <Container>
      
      <div className="row">
        {products.map((product, index) => (
            
          <div key={product.id ?? index} className="col-md-3">
            <CatalogItem product={product}></CatalogItem>
          </div>
        ))}
      </div>
    </Container>
    </>
  );
}

export default Catalog;
