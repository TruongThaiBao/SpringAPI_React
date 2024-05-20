import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Form, Button, FloatingLabel, Alert } from 'react-bootstrap';
import axios from 'axios';
import { Category } from '../../model/Category';
import { Product } from '../../model/Product';

const initialCategories: Category[] = [];

type ProductSubmitForm = {
    name: string;
    description: string;
    unitPrice: number;
    unitsInStock: number;
    brand: string;
    categoryName: string;
    image: FileList;
};

interface Props {
    onAddProduct: (data: Product) => void;
}

const ProductForm = ({onAddProduct} : Props) => {
    const [categories, setCategories] = useState(initialCategories);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    useEffect(() => {
        async function fetchCategories() {
          const res = await axios.get<Category[]>('/api/categories');
          const data = res.data;
    
          setCategories(data);
        }
        fetchCategories();
      }, [])

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        description: Yup.string()
            .required('Description is required')
            .min(6, 'Description must be at least 6 characters'),
        unitPrice: Yup.number()
            .required('Unit Price is required')
            .positive('Unit Price must be positive'),
        unitsInStock: Yup.number()
            .required('Units in Stock is required')
            .min(0, 'Units in Stock must be at least 0'),
        brand: Yup.string().required('Brand is required'),
        categoryName: Yup.string().required('Category name is required'),
        image: Yup.mixed().required('Image is required'),
        photoUpload: Yup.string(),
    });

    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ProductSubmitForm>({
        resolver: yupResolver(validationSchema)
        
    });

    const [image, setImage] = useState(null);

    const onSubmit = async (data: ProductSubmitForm) => {
        const formData = new FormData();
        formData.append('name',data.name);
        formData.append('description',data.description);
        formData.append('brand',data.brand);
        formData.append('unitPrice',data.unitPrice.toString());
        formData.append('unitsInStock',data.unitsInStock.toString());
        formData.append('categoryName',data.categoryName);
        formData.append('image', data.image[0]);

        try {
            console.log({data
            });
            
            const response = await axios.post('/api/products', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Product created successfully:', response.data);
            reset({
                name: "",
                description: "",
                unitPrice: 0,
                unitsInStock: 0,
                brand: "",
                categoryName: "",
            });
            setImage(null);

            onAddProduct(response.data);
        } catch (error) {
            console.error('There was an error creating the product!', error);
        }
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
        }
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
                <FloatingLabel controlId="name" label="Name">
                    <Form.Control type="text" {...register('name')} />
                    {errors.name && <Alert variant="danger">{errors.name.message}</Alert>}
                </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
                <FloatingLabel controlId="description" label="Description">
                    <Form.Control as="textarea" {...register('description')} />
                    {errors.description && <Alert variant="danger">{errors.description.message}</Alert>}
                </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
                <FloatingLabel controlId="unitPrice" label="Unit Price">
                    <Form.Control type="number" {...register('unitPrice')} />
                    {errors.unitPrice && <Alert variant="danger">{errors.unitPrice.message}</Alert>}
                </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
                <FloatingLabel controlId="unitsInStock" label="Units in Stock">
                    <Form.Control type="number" {...register('unitsInStock')} />
                    {errors.unitsInStock && <Alert variant="danger">{errors.unitsInStock.message}</Alert>}
                </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
                <FloatingLabel controlId="brand" label="Brand">
                    <Form.Control type="text" {...register('brand')} />
                    {errors.brand && <Alert variant="danger">{errors.brand.message}</Alert>}
                </FloatingLabel>
            </Form.Group>

            <Form.Group className='mb-3'>
                <FloatingLabel controlId='category' label="Category">
                    <Form.Select {...register('categoryName')} >
                        <option>Open this select menu</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.categoryName}>{category.categoryName}</option>
                        ))}
                        {errors.categoryName && <Alert variant="danger">{errors.categoryName.message}</Alert>}
                    </Form.Select>
                </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" {...register('image')} onChange={handleImageChange} />
                {errors.image && <Alert variant="danger">{errors.image.message}</Alert>}
                {imagePreview && <img src={imagePreview} alt="Preview" style={{ marginTop: '10px', maxWidth: '100%', height: 'auto' }} />}
            </Form.Group>

            <Button disabled={isSubmitting}
                     variant="success" type="submit">
                {isSubmitting ? "Loading" : "Create Product"}
            </Button>
        </Form>
    );
};

export default ProductForm;
