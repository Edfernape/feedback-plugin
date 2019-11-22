"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./FeedbackBasic.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FeedbackBasic =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FeedbackBasic, _React$Component);

  function FeedbackBasic(props) {
    var _this;

    _classCallCheck(this, FeedbackBasic);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FeedbackBasic).call(this, props));
    _this.state = {
      theme: _this.setTheme(_this.props.theme),
      openerSize: _this.setOpenerSize(_this.props.openerSize),
      divSize: _this.setDivSize(_this.props.openerSize),
      divPlacement: _this.setDivPlacement(_this.props.openerPlacement),
      closerPlacement: _this.setCloserPlacement(_this.props.openerPlacement),
      openerStyles: {},
      openerDivStyles: {},
      animation: _this.setAnimation(_this.props.openerPlacement)
    };
    _this.openerClicked = _this.openerClicked.bind(_assertThisInitialized(_this));
    _this.closerClicked = _this.closerClicked.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FeedbackBasic, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // configure all styles based on props
      var theme = this.state.theme;
      var openerSize = this.state.openerSize;

      var styles1 = _objectSpread({}, theme, {}, openerSize);

      var divPlacement = this.state.divPlacement;
      var divSize = this.state.divSize;

      var styles2 = _objectSpread({}, divPlacement, {}, divSize);

      this.setState({
        openerStyles: styles1,
        openerDivStyles: styles2
      });
    }
    /* constructor's functions to set opener's state */

  }, {
    key: "setTheme",
    value: function setTheme(theme) {
      switch (theme) {
        case 'red':
          return {
            backgroundColor: '#e42217',
            color: 'whitesmoke'
          };

        case 'yellow':
          return {
            backgroundColor: 'yellow',
            color: 'black'
          };

        case 'blue':
          return {
            backgroundColor: 'dodgerblue',
            color: 'whitesmoke'
          };

        case 'green':
          return {
            backgroundColor: '#87f717',
            color: 'black'
          };

        case 'orange':
          return {
            backgroundColor: '#f88017',
            color: 'whitesmoke'
          };

        case 'purple':
          return {
            backgroundColor: 'purple',
            color: 'whitesmoke'
          };

        case 'dark':
          return {
            backgroundColor: '#34282c',
            color: 'whitesmoke'
          };

        case 'light':
          return {
            backgroundColor: '#fefcff',
            color: '#34282c'
          };
      }
    }
  }, {
    key: "setOpenerSize",
    value: function setOpenerSize(size) {
      switch (size) {
        case 'small':
          return {
            fontSize: "small"
          };

        case 'medium':
          return {
            fontSize: "medium"
          };

        case 'large':
          return {
            fontSize: "larger"
          };

        default:
          return {
            fontSize: "medium"
          };
      }
    }
  }, {
    key: "setDivSize",
    value: function setDivSize(size) {
      switch (size) {
        case 'small':
          return {
            width: "90px",
            height: "30px"
          };

        case 'medium':
          return {
            width: "120px",
            height: "40px"
          };

        case 'large':
          return {
            width: "150px",
            height: "50px"
          };

        default:
          return {
            width: "120px",
            height: "40px"
          };
      }
    }
  }, {
    key: "setDivPlacement",
    value: function setDivPlacement(placement) {
      switch (placement) {
        case 'top':
          return {
            top: "1%",
            left: "50%",
            transform: "translate(-50%)"
          };

        case 'top-right':
          return {
            top: "1%",
            right: "1%"
          };

        case 'right':
          return {
            top: "50%",
            right: "1%",
            transform: "translateY(-50%)"
          };

        case 'bottom-right':
          return {
            bottom: "1%",
            right: "1%"
          };

        case 'bottom':
          return {
            bottom: "1%",
            left: "50%",
            transform: "translate(-50%)"
          };

        case 'bottom-left':
          return {
            bottom: "1%",
            left: "1%"
          };

        case 'left':
          return {
            top: "50%",
            left: "1%",
            transform: "translateY(-50%)"
          };

        case 'top-left':
          return {
            top: "1%",
            left: "1%"
          };
      }
    }
  }, {
    key: "setCloserPlacement",
    value: function setCloserPlacement(placement) {
      switch (placement) {
        case 'top':
          return {
            top: "108%",
            left: "50%",
            transform: "translateX(-50%)"
          };

        case 'top-right':
          return {
            top: "50%",
            right: "108%",
            transform: "translateY(-50%)"
          };

        case 'right':
          return {
            top: "50%",
            right: "108%",
            transform: "translateY(-50%)"
          };

        case 'bottom-right':
          return {
            top: "50%",
            right: "108%",
            transform: "translateY(-50%)"
          };

        case 'bottom':
          return {
            bottom: "108%",
            left: "50%",
            transform: "translateX(-50%)"
          };

        case 'bottom-left':
          return {
            top: "50%",
            left: "108%",
            transform: "translateY(-50%)"
          };

        case 'left':
          return {
            top: "50%",
            left: "108%",
            transform: "translateY(-50%)"
          };

        case 'top-left':
          return {
            top: "50%",
            left: "108%",
            transform: "translateY(-50%)"
          };
      }
    }
  }, {
    key: "setAnimation",
    value: function setAnimation(placement) {
      switch (placement) {
        case 'top':
          return 'T';

        case 'top-right':
          return 'R';

        case 'right':
          return 'R';

        case 'bottom-right':
          return 'R';

        case 'bottom':
          return 'B';

        case 'bottom-left':
          return 'L';

        case 'left':
          return 'L';

        case 'top-left':
          return 'L';
      }
    }
    /* onClick functions */

  }, {
    key: "openerClicked",
    value: function openerClicked() {
      this.props.toggleShowOpener();
      this.props.openerSetForm(6);
    }
  }, {
    key: "closerClicked",
    value: function closerClicked() {
      this.props.closerClicked();
    }
    /* functions used upon rendering */

  }, {
    key: "checkShowOpener",
    value: function checkShowOpener() {
      if (this.props.showOpener) {
        return "1s " + this.state.animation + "appear" + " both";
      } else {
        return "1s " + this.state.animation + "disappear" + " both";
      }
    }
  }, {
    key: "checkShowOpener2",
    value: function checkShowOpener2() {
      if (this.props.showOpener) {
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: "addAnimations",
    value: function addAnimations(str) {
      var style1 = this.state.openerDivStyles;
      var style2 = {
        animation: str
      };

      var style3 = _objectSpread({}, style1, {}, style2);

      return style3;
    }
  }, {
    key: "render",
    value: function render() {
      var str = this.checkShowOpener();
      var disabled = this.checkShowOpener2();
      var finalStyle = this.addAnimations(str);
      return _react["default"].createElement("div", {
        style: finalStyle,
        className: "openerDiv"
      }, _react["default"].createElement("button", {
        type: "button",
        disabled: disabled,
        style: this.state.closerPlacement,
        onClick: this.closerClicked,
        className: "closer"
      }, "\u2716"), _react["default"].createElement("button", {
        disabled: disabled,
        type: "button",
        style: this.state.openerStyles,
        className: "opener",
        onClick: this.openerClicked
      }, "Feedback"));
    }
  }]);

  return FeedbackBasic;
}(_react["default"].Component);

exports["default"] = FeedbackBasic;