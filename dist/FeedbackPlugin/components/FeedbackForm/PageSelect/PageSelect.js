"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./PageSelect.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Form1 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Form1, _React$Component);

  function Form1(props) {
    var _this;

    _classCallCheck(this, Form1);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Form1).call(this, props));
    _this.state = {
      formCategory: _this.setCategory(_this.props.formCategory)
    };
    _this.btn1 = _this.btn1.bind(_assertThisInitialized(_this));
    _this.btn2 = _this.btn2.bind(_assertThisInitialized(_this));
    _this.btn3 = _this.btn3.bind(_assertThisInitialized(_this));
    _this.btn4 = _this.btn4.bind(_assertThisInitialized(_this));
    _this.btn5 = _this.btn5.bind(_assertThisInitialized(_this));
    _this.next = _this.next.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Form1, [{
    key: "setCategory",
    value: function setCategory(cat) {
      if (cat == 6) {
        return 1;
      } else {
        return cat;
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      for (var i = 1; i < 6; i++) {
        if (i == this.state.formCategory) {
          document.getElementById("btn" + i).className = "p1btnselected";
        } else {
          document.getElementById("btn" + i).className = "p1btn";
        }
      }

      document.getElementById("btn1").addEventListener("click", this.btn1);
      document.getElementById("btn2").addEventListener("click", this.btn2);
      document.getElementById("btn3").addEventListener("click", this.btn3);
      document.getElementById("btn4").addEventListener("click", this.btn4);
      document.getElementById("btn5").addEventListener("click", this.btn5);
      document.getElementById("p1next").addEventListener("click", this.next);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.getElementById("btn1").removeEventListener("click", this.btn1);
      document.getElementById("btn2").removeEventListener("click", this.btn2);
      document.getElementById("btn3").removeEventListener("click", this.btn3);
      document.getElementById("btn4").removeEventListener("click", this.btn4);
      document.getElementById("btn5").removeEventListener("click", this.btn5);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      for (var i = 1; i < 6; i++) {
        if (i == this.state.formCategory) {
          document.getElementById("btn" + i).className = "p1btnselected";
        } else {
          document.getElementById("btn" + i).className = "p1btn";
        }
      }
    }
  }, {
    key: "btn1",
    value: function btn1() {
      this.props.setCat(1);
      this.setState({
        formCategory: 1
      });
    }
  }, {
    key: "btn2",
    value: function btn2() {
      this.props.setCat(2);
      this.setState({
        formCategory: 2
      });
    }
  }, {
    key: "btn3",
    value: function btn3() {
      this.props.setCat(3);
      this.setState({
        formCategory: 3
      });
    }
  }, {
    key: "btn4",
    value: function btn4() {
      this.props.setCat(4);
      this.setState({
        formCategory: 4
      });
    }
  }, {
    key: "btn5",
    value: function btn5() {
      this.props.setCat(5);
      this.setState({
        formCategory: 5
      });
    }
  }, {
    key: "next",
    value: function next() {
      this.props.setCat(this.state.formCategory);
      this.props.childSetPage(2);
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "p1"
      }, _react["default"].createElement("h2", null, "Please select a category for your feedback."), _react["default"].createElement("button", {
        id: "btn1",
        className: "p1btn",
        type: "button"
      }, "General Feedback"), _react["default"].createElement("button", {
        id: "btn2",
        className: "p1btn",
        type: "button"
      }, "Usability Issue"), _react["default"].createElement("button", {
        id: "btn3",
        className: "p1btn",
        type: "button"
      }, "Bug Report"), _react["default"].createElement("button", {
        id: "btn4",
        className: "p1btn",
        type: "button"
      }, "Vulnerability Report"), _react["default"].createElement("button", {
        id: "btn5",
        className: "p1btn",
        type: "button"
      }, "Feature Suggestion"), _react["default"].createElement("button", {
        id: "p1next",
        className: "p1next",
        type: "button"
      }, "Next"));
    }
  }]);

  return Form1;
}(_react["default"].Component);

exports["default"] = Form1;