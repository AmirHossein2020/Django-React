import React, {useEffect} from 'react';
import { useDispatch , useSelector } from 'react-redux';
import {fetchCategories} from '../redux/actions/categoriesActions';
import {fetchProducts} from '../redux/actions/productsActions';
import CategoryList from '../components/CategoryList';
import FlashSales from '../components/FlashSalesProducts';
import TopSelling from '../components/TopSellingProducts';
import CategoryProducts from '../components/CategoryProducts';

const HomePage = () => {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories);
    const products = useSelector(state => state.products);

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div>
            {/*start row for categories and flash sales*/}
            <div className="row">
                <div className="col-md-3">
                    <CategoryList categories={categories} />
                </div>
                <div className="col-md-9">
                    <FlashSalesProducts products={categories} />
                </div>
            </div>
            {/*Second row row for top selling and category products*/}
            
            <div className="row">
                <TopSellingProducts products={products} />
            </div>
            
            {/* third forth and fith rows for products */}
            {categories.map(category => (
                <div key={category.id} className="row">
                    <CategoryProducts category={category} products={products}/>
                </div>
            ))}
            
        </div>
    );
};
export default HomePage;