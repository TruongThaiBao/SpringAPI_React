import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Product } from '../../model/Product';
import { Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap';

const ProductDetail = () => {
    const { productId } = useParams<{ productId: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get<Product>(`/api/products/${productId}`);
                setProduct(response.data);
            } catch (err) {
                setError('Có lỗi xảy ra khi lấy thông tin sản phẩm.');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    if (loading) {
        return (
            <Container className="text-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Đang tải...</span>
                </Spinner>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="text-center">
                <Alert variant="danger">{error}</Alert>
            </Container>
        );
    }

    return (
        <Container>
            {product ? (
                <Row className="justify-content-md-center">
                    <Col md={8}>
                        <Card>
                            <Card.Img variant="top" src={product.image} alt={product.name} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>
                                    <strong>Mô tả: </strong>{product.description}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Giá: </strong>${product.unitPrice}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Số lượng tồn kho: </strong>{product.unitsInStock}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Thương hiệu: </strong>{product.brand}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Danh mục: </strong>{product.categoryName}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            ) : (
                <Container className="text-center">
                    <Alert variant="warning">Không tìm thấy sản phẩm.</Alert>
                </Container>
            )}
        </Container>
    );
};

export default ProductDetail;
