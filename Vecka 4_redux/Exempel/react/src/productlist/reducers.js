import {
    FETCH_PRODUCTS_SUCCESS,
    REMOVE_PRODUCT
} from './actions';

export default (state = null, action) => {
    switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
        return action.products;

    case REMOVE_PRODUCT:
        return state.filter(product => product.Id !== action.productId);

    default:
        return state;
    }
};