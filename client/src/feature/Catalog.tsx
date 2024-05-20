import { Product } from "../model/Product";
import CatalogItem from "./CatalogItem";

type CatalogProps = {
  products: Product[];
};

function Catalog({ products }: CatalogProps) {
  return (
    <>
      <div className="row">
        {products.map((product, index) => (
            
          <div key={product.id ?? index} className="col-md-3">
            <CatalogItem product={product}></CatalogItem>
          </div>
        ))}
      </div>
    </>
  );
}

export default Catalog;
