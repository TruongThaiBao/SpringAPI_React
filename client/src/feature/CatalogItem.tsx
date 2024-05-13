import { Button, Card } from "react-bootstrap"
import { Product } from "../model/Product"

type CatalogItem =  {
    product : Product;
}

function CatalogItem({product}  : CatalogItem) {
    return (
        <>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={`http://localhost:8080/api/file/image/${product.imageUrl}`}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                {/* <Card.Text>{product.description}</Card.Text> */}
                <Card.Subtitle>{product.unitPrice}</Card.Subtitle>
                <Card.Subtitle>Stock: {product.unitsInStock}</Card.Subtitle>
                <Button variant="success">View</Button>
              </Card.Body>
            </Card>
        </>
    )
}
export default CatalogItem