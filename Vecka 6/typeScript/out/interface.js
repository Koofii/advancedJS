"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var ActionType;
(function (ActionType) {
    ActionType[ActionType["FetchProductsRequest"] = 0] = "FetchProductsRequest";
    ActionType[ActionType["FetchProductsSuccess"] = 1] = "FetchProductsSuccess";
})(ActionType || (ActionType = {}));
;
// class FetchProductsSuccessAction implements Action {
//     type;
//     products: any[];
// };
var fetchProductsRequest = function () { return ({
    type: ActionType.FetchProductsRequest
}); };
var FetchProductsSuccess = function (products) { return ({
    type: ActionType.FetchProductsSuccess,
    products: products
}); };
// const FetchProductsSuccess = (products): Action => {
//     const action = {
//         type: ActionType.FetchProductsSuccess,
//         products
//     }
//     return action
// };
var reducer = function (state, action) {
    if (state === void 0) { state = {}; }
    switch (action.type) {
        case ActionType.FetchProductsRequest:
            return __assign({}, state, { loading: true });
        case ActionType.FetchProductsSuccess:
            return __assign({}, state, { isLoading: false, products: action.products });
        default:
            return state;
    }
};
exports["default"] = (function () {
    var state = undefined;
    state = reducer(state, fetchProductsRequest());
    state = reducer(state, FetchProductsSuccess([
        { id: 1, name: 'Product A' }
    ]));
    console.log(state);
});
