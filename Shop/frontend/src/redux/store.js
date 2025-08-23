import { legacy_createStore as creatStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import categoriesReducer from '../reducers/categoriesReduicers';
import productsReducer from '../reducers/productsReducers';

const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer
});

const store = creatStore(rootReducer, applyMiddleware(thunk));

export default store;