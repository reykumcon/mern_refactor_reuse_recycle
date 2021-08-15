import React, { useState } from 'react';

const ProductForm = (props) => {
    const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({title, price, description});

        setTitle(initialTitle);
        setPrice(initialPrice);
        setDescription(initialDescription);
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>Title:</label>&nbsp;
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                </div>
                <br />
                <div>
                    <label>Price:</label>&nbsp;
                    <input
                        type="number"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)} />
                </div>
                <br />
                <div>
                    <label>Description:</label>&nbsp;
                    <input
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                </div>
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default ProductForm;