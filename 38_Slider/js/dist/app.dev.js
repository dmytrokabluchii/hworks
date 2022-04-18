"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Свойства самого класса
var Figure =
/*#__PURE__*/
function () {
  function Figure(width, height, left, top) {
    var radius = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '0px';

    _classCallCheck(this, Figure);

    this.width = width;
    this.height = height;
    this.left = left;
    this.top = top;
    this.color = 'tomato';
    this.radius = radius;
  }
  /* draw = function(){
    let div = document.createElement('div');
    div.style.width = this.width+'px';
    div.style.height = this.height+'px';
    div.style.left = this.left+'px';
    div.style.top = this.top+'px';
    div.style.position = 'absolute';
    div.style.backgroundColor = this.color;
    div.style.borderRadius - this.radius;
    document.body.append(div);
  } */


  _createClass(Figure, [{
    key: "setColor",
    set: function set(fig_color) {
      this.color - fig_color;
    }
  }]);

  return Figure;
}();

var Square =
/*#__PURE__*/
function (_Figure) {
  _inherits(Square, _Figure);

  function Square(width, left, top) {
    var radius = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '0px';

    _classCallCheck(this, Square);

    return _possibleConstructorReturn(this, _getPrototypeOf(Square).call(this, width, width, left, top, radius));
  }

  return Square;
}(Figure);

var Circle =
/*#__PURE__*/
function (_Square) {
  _inherits(Circle, _Square);

  function Circle(width, left, top) {
    _classCallCheck(this, Circle);

    return _possibleConstructorReturn(this, _getPrototypeOf(Circle).call(this, width, left, top, '50%'));
  }

  return Circle;
}(Square);

var rect = new Figure(200, 100, 300, 150, '20px');
var rect2 = new Figure(40, 200, 50, 50);
rect2.setColor = 'yellow';
rect.draw();
rect2.draw();
var sq = new Square(230, 700, 120);
sq.setColor = 'green';
sq.draw();
var cir = new Circle(135, 100, 300);
cir.setColor = '#303080';
cir.draw();