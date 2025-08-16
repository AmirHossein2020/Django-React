import {creatStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import categoriesReducer from './categoriesReducers';
import productsReducer from '../reducers/productsReducers';

const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer
});

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;