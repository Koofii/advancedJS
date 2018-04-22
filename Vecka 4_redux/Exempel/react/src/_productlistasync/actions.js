export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';

export const REMOVE_PRODUCT_REQUEST = 'REMOVE_PRODUCT_REQUEST';
export const REMOVE_PRODUCT_SUCCESS = 'REMOVE_PRODUCT_SUCCESS';

const fetchProductsRequest = () => ({
    type: FETCH_PRODUCTS_REQUEST
});

const fetchProductsSuccess = products => ({
    type: FETCH_PRODUCTS_SUCCESS,
    products
});

export const fetchProducts = () => (dispatch, getState) => {
    const { loading } = getState();
    if (!loading) {
        dispatch(fetchProductsRequest());

        setTimeout(
            () => fetch('http://demo.edument.se/api/products')
                .then(res => res.json())
                .then(products => dispatch(fetchProductsSuccess(products))),
            2000
        );   
    }
};

const removeProductRequest = productId => ({
    type: REMOVE_PRODUCT_REQUEST,
    productId
});

const removeProductSuccess = productId => ({
    type: REMOVE_PRODUCT_SUCCESS,
    productId
});

export const removeProduct = productId => (dispatch, getState) => {
    const { deleting } = getState();
    if (deleting === -1) {
        dispatch(removeProductRequest(productId));

        setTimeout(
            () => dispatch(removeProductSuccess(productId)),
            2000
        );
    }
};