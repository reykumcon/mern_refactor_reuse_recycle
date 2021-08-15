import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';

const ProductList = (props) => {
    // const { removeFromDom } = props;
    // const deleteProduct = (productId) => {
    //     axios.delete(`http://localhost:8000/api/products/${productId}`)
    //         .then(res => {
    //             removeFromDom(productId)
    //         })
    // }

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data));
    }, [products])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId))
    }
    
    return (
        <div>
            {products.map((product, idx) => {
                return (
                    <p key={idx}>
                        <Link to={`/products/${product._id}`}>
                            {product.title}
                        </Link>
                        &nbsp;
                        |
                        &nbsp;
                        <Link to={`/products/${product._id}/edit`}>
                            Edit
                        </Link>
                        &nbsp;
                        |
                        &nbsp;
                        <DeleteButton 
                            productId={product._id}
                            successCallback={() => removeFromDom(product._id)}
                        />
                    </p>
                )
            })}
        </div>
    )
}

export default ProductList;