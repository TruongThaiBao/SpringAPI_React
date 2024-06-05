import { Button, Card } from "react-bootstrap"
import { Product } from "../model/Product"

type CatalogItem =  {
    product : Product;
}

function CatalogItem({product}  : CatalogItem) {
    return (
        <>
            <Card style={{ width: "18rem" }}>
              <Card.Title>{product.name}</Card.Title>
              <Card.Img
                variant="top"
                src={`/api/file/image/${product.imageUrl}`}
                style={{height: "350px"}}
              />
              <Card.Body>
                {/* <Card.Title>{product.name}</Card.Title> */}
                {/* <Card.Text>{product.description}</Card.Text> */}
                <Card.Subtitle>{product.unitPrice}</Card.Subtitle>
                <Card.Subtitle>Stock: {product.unitsInStock}</Card.Subtitle>
                <Button variant="success" className="me-3" style={{width: "110px", height: "40px"}}>Add to cart</Button>
                <Button variant="success" className="ms-3" 
                        style={{width: "110px", height: "40px"}}
                        href={`/catalog/${product.id}`}>View</Button>
              </Card.Body>
            </Card>
        </>
    )
}
export default CatalogItem