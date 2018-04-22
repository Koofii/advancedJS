import { combineReducers } from 'redux';

import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    REMOVE_PRODUCT_REQUEST,
    REMOVE_PRODUCT_SUCCESS
} from './actions';

const productsReducer = (state = [], action) => {
    switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
        return action.products;

    case REMOVE_PRODUCT_SUCCESS:
        return state.filter(product => product.Id !== action.productId);

    default:
        return state;
    }
};

const loadingReducer = (state = false, action) => {
    switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
        return true;

    case FETCH_PRODUCTS_SUCCESS:
        return false;

    default:
        return state;
    }
};

const deletingReducer = (state = -1, action) => {
    switch (action.type) {
    case REMOVE_PRODUCT_REQUEST:
        return action.productId;
    
    case REMOVE_PRODUCT_SUCCESS:
        return -1;

    default:
        return state;
    }
};

export default combineReducers({
    products: productsReducer,
    loading: loadingReducer,
    deleting: deletingReducer
});