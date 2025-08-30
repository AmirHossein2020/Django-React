import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';


const FlashSaleProducts = ({ products }) => {
    const navigate = useNavigate();
    const [ currentIndex, setCurrentIndex ] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % products.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [products.length]);

    const handleClick = () => {
        const product = products[currentIndex];
        navigate.push(`/product/${product.id}`);
    };
        return(
            <div className = 'flash-sale-slider' onClick={handleClick}>
                <h3>Flash Sales</h3>
                {products.length > 0 && (
                    <img 
                    key={products[currentIndex].id}
                    src= {products[currentIndex].image}
                    alt={products[currentIndex].name}
                    />
                )}

            </div>
        );
    
};

export default FlashSaleProducts;