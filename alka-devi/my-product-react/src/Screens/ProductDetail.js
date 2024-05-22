import { useEffect, useState } from 'react';
import { useParams,NavLink } from 'react-router-dom';
import './ProductDetail.css';

function ProductDetail() {
    const params = useParams();
    const prodId = params.ProductId;
    const [product, setProduct] = useState({});

    function loadProductById() {
        fetch('https://fakestoreapi.com/products/' + prodId)
            .then((response) => {
                response.json()
                    .then((data) => {
                        setProduct(data);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        loadProductById();
    },);

    return (
        <div className="product-detail">
            <h3>{product.title}</h3>
            <img src={product.image} className="product-image" alt={product.title} />
            <p className="product-description">{product.description}</p>
            <p className="product-category">Category: {product.category}</p>
            <p className="product-price">${product.price}</p>
             <NavLink to='/pdt' className="nav-link">Back to ProductList</NavLink>
        </div>
    );
}

export default ProductDetail;