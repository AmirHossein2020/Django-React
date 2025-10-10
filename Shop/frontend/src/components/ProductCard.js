import { Link } from "react-router-dom";
import React from "react";

const productCard = ( { product } ) => {
    return(
        <div className="card">
            <img src={product.image} className="card-image-top" alt={product.name}/>
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price: ${product.price}</p>
                <Link to={`/product/${product.slug}`} className="btn btn-primary">View Detels</Link>
            </div>
            
        </div>
    );
}

export default ProductCard;