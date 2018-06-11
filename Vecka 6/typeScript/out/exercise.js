"use strict";
// enum ActionType {
//     OP_FOO,
//     OP_BAR
// };
exports.__esModule = true;
var Operation;
(function (Operation) {
    Operation[Operation["OP_FOO"] = 0] = "OP_FOO";
    Operation[Operation["OP_BAR"] = 1] = "OP_BAR";
})(Operation || (Operation = {}));
;
var ServiceA = /** @class */ (function () {
    function ServiceA() {
    }
    ServiceA.prototype.execute = function (op) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (op === Operation.OP_FOO) {
            return Promise.reject("Operation " + Operation[op] + " not supported");
        }
        return Promise.resolve(args[0]);
    };
    return ServiceA;
}());
var ServiceB = /** @class */ (function () {
    function ServiceB(returnValue) {
        this.returnValue = returnValue;
    }
    ServiceB.prototype.execute = function (op) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.returnValue) {
            return Promise.resolve(this.returnValue);
        }
        return Promise.resolve(args[0]);
    };
    return ServiceB;
}());
var logAndExecute = function (service, op) {
    var params = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        params[_i - 2] = arguments[_i];
    }
    console.log("Operation to execute " + Operation[op]);
    service.execute(op, params)
        .then(function (value) { return console.log("Result of execution " + value); })["catch"](function (err) { return console.log(err); });
};
// const logAndExecute(service: Service, op: Operation) => {
//     service.execute(op, ...)
//     .then(value => console.log(value))
//     .catch(err => console.log(err))
// }
exports["default"] = (function () {
    var sa = new ServiceA();
    var sb = new ServiceB(52);
    logAndExecute(sa, Operation.OP_FOO);
    logAndExecute(sa, Operation.OP_BAR, 42);
    logAndExecute(sb, Operation.OP_FOO);
});
