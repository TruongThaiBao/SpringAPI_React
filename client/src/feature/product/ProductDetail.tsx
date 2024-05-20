import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    let params = useParams();

    return (
        <div>
            <h3 className='text-center'>Product Detail: {params.productId}</h3>
        </div>
    );
};

export default ProductDetail;