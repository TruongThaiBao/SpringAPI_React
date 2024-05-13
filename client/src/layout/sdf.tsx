<Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src="../../public/default-image.png" />
    <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        {/* <Card.Text>{product.description}</Card.Text> */}
        <Card.Subtitle>{product.unitPrice}</Card.Subtitle>
        <Card.Subtitle>Stock: {product.unitsInStock}</Card.Subtitle>
        <Button variant="success">View</Button>
    </Card.Body>
    </Card>

<List>
{props.bien1.map((product, index) => (
    <ListItem key={index}>
        <ListItemAvatar>
            <Avatar src={`http://localhost:8080/api/file/image/${product.imageUrl}`}></Avatar>
        </ListItemAvatar>
    </ListItem>
))}
</List>

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