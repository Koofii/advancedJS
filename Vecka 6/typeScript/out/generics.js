"use strict";
exports.__esModule = true;
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.enqueue = function (value) {
        this.data.push(value);
    };
    Queue.prototype.dequeue = function () {
        return this.data.shift();
    };
    return Queue;
}());
exports["default"] = (function () {
    var q = new Queue(); //här bestämmer vilken typ vi ska skapa klassen med. Vad vi accepterar in.
    q.enqueue({ id: 1 });
    q.enqueue({ id: 2 });
    q.enqueue({ id: 3 });
    q.enqueue({ id: 4 });
    // q.enqueue('foo'); // detta funkar inte då vi ovan satt att vi bara tar in number.
    console.log(q.dequeue());
});
