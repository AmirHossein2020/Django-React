import React, {useEffect} from 'react';
import { useDispatch , useSelector } from 'react-redux';
import {fetchCategories} from '../redux/actions/categoriesActions';
import {fetchProducts} from '../redux/actions/productsActions';
import CategoryList from '../components/CategoryList';
import FlashSales from '../components/FlashSales';
import TopSelling from '../components/TopSelling';
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
            <CategoryList categories={categories} />
            <FlashSales products={products} />
            <TopSelling products={products} />
            <CategoryProducts products={products} />
        </div>
    );
}