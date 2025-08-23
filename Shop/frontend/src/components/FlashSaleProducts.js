import React from "react";

const FlashSalesProducts = ({ products }) => {
    const FlashSalesProducts = products.filter((product) => product.isFlashSale);

    return(
        <div>
            <h3>Flash Sales</h3>
        </div>
    );
};

export default FlashSalesProducts;