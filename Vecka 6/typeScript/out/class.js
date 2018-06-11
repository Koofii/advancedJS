"use strict";
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point(_x, _y, _name) {
        this._x = _x;
        this._y = _y;
        this._name = _name;
    }
    Point.prototype.getDescription = function () {
        return "Point is at (" + this.x + ", " + this.y + ") from origin (0,0)";
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "name", {
        get: function () {
            return this._name || 'No name given for this point';
        },
        enumerable: true,
        configurable: true
    });
    Point.prototype.distanceTo = function (point) {
        var a = point.x - this.x;
        var b = point.y - this.y;
        return Math.sqrt((Math.pow(a, 2)) + (Math.pow(b, 2)));
    };
    return Point;
}());
;
var showDescription = function (value) {
    console.log(value.getDescription());
};
exports["default"] = (function () {
    var p1 = new Point(1, 1, 'foo');
    var p2 = new Point(3, 3);
    console.log(p1.distanceTo(p2));
    console.log(showDescription(p1));
    console.log(showDescription(p2));
});
