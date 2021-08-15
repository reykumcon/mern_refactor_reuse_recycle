import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Detail = (props) => {
    const { id } = props;
    const [product, setProduct] = useState({})

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(res => {
                navigate("/products/")
            })
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct({
                ...res.data
            }))
    }, [id])

    return (
        <div>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <button onClick={(e) => {deleteProduct(product._id)}}>
                Delete
            </button>
        </div>
    )
}

export default Detail;