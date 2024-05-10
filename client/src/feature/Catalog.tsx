import { Button, Card } from "react-bootstrap";
import { Product } from "../model/Product";


type CatalogProps = {
    product: Product
  }
  
  function Catalog({ product }: CatalogProps) {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="../../public/default-image.png" />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          {/* <Card.Text>{product.description}</Card.Text> */}
          <Card.Subtitle>{product.unitPrice}</Card.Subtitle>
          <Card.Subtitle>Stock: {product.unitsInStock}</Card.Subtitle>
          <Button variant="success">View</Button>
        </Card.Body>
      </Card>
    )
  }
  
  export default Catalog