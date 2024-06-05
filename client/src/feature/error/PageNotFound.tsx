import React from 'react';
import { Container, Paper, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const navigate = useNavigate();

    return (
        <Container component={Paper} style={{ padding: '2rem', textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
                404 - Page not found
            </Typography>
            <Button variant="contained" color="primary" onClick={() => navigate('/')}>
                Go back
            </Button>
        </Container>
    );
};

export default PageNotFound;