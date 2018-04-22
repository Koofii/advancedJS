export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const REMOVE_PRODUCT         = 'REMOVE_PRODUCT';

export const fetchProductsSuccess = products => ({
    type: FETCH_PRODUCTS_SUCCESS,
    products
});

export const removeProduct = productId => ({
    type: REMOVE_PRODUCT,
    productId
});