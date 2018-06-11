enum ActionType{
    FetchProductsRequest,
    FetchProductsSuccess
}

interface Action {
    type: ActionType;


    [key: string]: any;

    // products?: Array<any> // "Array" är en generic type.
    //Kan också skriva Array<string> då kan jag bara använda strings i min array.
    // products?: any[]
    // kan också skriva products?: string[]
};

// class FetchProductsSuccessAction implements Action {
//     type;
//     products: any[];
// };

const fetchProductsRequest = (): Action => ({
    type: ActionType.FetchProductsRequest
});

const FetchProductsSuccess = (products): Action => ({
    type: ActionType.FetchProductsSuccess,
    
    products
});

// const FetchProductsSuccess = (products): Action => {
//     const action = {
//         type: ActionType.FetchProductsSuccess,
//         products
//     }
//     return action
// };

const reducer = (state = {}, action: Action) => {
    switch (action.type) {
        case ActionType.FetchProductsRequest:
            return {
                ...state,
                loading: true
            };

        case ActionType.FetchProductsSuccess:
            return {
                ...state,
                isLoading: false,
                products: action.products
            };

        default:
            return state;
    }
};

export default () => {
    let state = undefined;
    state = reducer(state, fetchProductsRequest());
    state = reducer(state, FetchProductsSuccess([
        {id: 1, name: 'Product A'}
    ]))
    console.log(state)
};