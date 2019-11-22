"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./FeedbackCarousel.css");

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

var carouselMessage = {
  1: "See something you like/dislike?",
  2: "Encountered a problem?",
  3: "Experienced a bug?",
  4: "Spotted a vulnerability?",
  5: "Know a feature we could use?"
};
var buttonMessage = {
  1: "Let Us Know",
  2: "Report Usability Issue",
  3: "Report a Bug",
  4: "Tell Us",
  5: "Suggest a Feature"
};

var FeedbackCarousel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FeedbackCarousel, _React$Component);

  function FeedbackCarousel(props) {
    var _this;

    _classCallCheck(this, FeedbackCarousel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FeedbackCarousel).call(this, props));
    _this.state = {
      theme: _this.setTheme(_this.props.theme),
      carouselSize: _this.setSize(_this.props.openerSize),
      carouselPlacement: _this.setPlacement(_this.props.openerPlacement),
      carouselStyles: {},
      animation: _this.setAnimation(_this.props.openerPlacement),
      scroller: null,
      carouselPage: 1,
      closerPlacement: _this.setCloserPlacement(_this.props.openerPlacement)
    };
    _this.scroll = _this.scroll.bind(_assertThisInitialized(_this));
    _this.carouselClicked = _this.carouselClicked.bind(_assertThisInitialized(_this));
    _this.closerClicked = _this.closerClicked.bind(_assertThisInitialized(_this));
    _this.b1clicked = _this.b1clicked.bind(_assertThisInitialized(_this));
    _this.b2clicked = _this.b2clicked.bind(_assertThisInitialized(_this));
    _this.b3clicked = _this.b3clicked.bind(_assertThisInitialized(_this));
    _this.b4clicked = _this.b4clicked.bind(_assertThisInitialized(_this));
    _this.b5clicked = _this.b5clicked.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FeedbackCarousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // set styles, "timer" for scroll and event listeners
      var theme = this.state.theme;
      var size = this.state.carouselSize;
      var placement = this.state.carouselPlacement;

      var style = _objectSpread({}, theme, {}, size, {}, placement);

      var scroller = setInterval(this.scroll, 5000);
      this.setState({
        carouselStyles: style,
        scroller: scroller
      });
      document.getElementById("b1").addEventListener("click", this.b1clicked);
      document.getElementById("b2").addEventListener("click", this.b2clicked);
      document.getElementById("b3").addEventListener("click", this.b3clicked);
      document.getElementById("b4").addEventListener("click", this.b4clicked);
      document.getElementById("b5").addEventListener("click", this.b5clicked);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // clear "timer" for scrolling and remove event listeners
      clearInterval(this.state.scroll);
      document.getElementById("b1").removeEventListener("click", this.b1clicked);
      document.getElementById("b2").removeEventListener("click", this.b2clicked);
      document.getElementById("b3").removeEventListener("click", this.b3clicked);
      document.getElementById("b4").removeEventListener("click", this.b4clicked);
      document.getElementById("b5").removeEventListener("click", this.b5clicked);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      // update style of dots
      var page = this.state.carouselPage;

      for (var i = 1; i < 6; i++) {
        if (i == page) {
          document.getElementById("b" + i).className = "dotActive";
        } else {
          document.getElementById("b" + i).className = "dot";
        }
      }
    }
    /* functions to set carousel states based on props */

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
    key: "setSize",
    value: function setSize(size) {
      switch (size) {
        case 'small':
          return {
            width: "150px",
            height: "75px",
            fontSize: "small"
          };

        case 'medium':
          return {
            width: "175px",
            height: "88px",
            fontSize: "medium"
          };

        case 'large':
          return {
            width: "200px",
            height: "100px",
            fontSize: "large"
          };

        default:
          return {
            width: "175px",
            height: "88px",
            fontSize: "medium"
          };
      }
    }
  }, {
    key: "setPlacement",
    value: function setPlacement(placement) {
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
    /* function to scroll through carousel */

  }, {
    key: "scroll",
    value: function scroll() {
      var oldPage = this.state.carouselPage;
      var newPage = oldPage + 1;

      if (newPage > 5) {
        newPage = 1;
      }

      this.setState({
        carouselPage: newPage
      });
    }
    /* onClick functions */

  }, {
    key: "carouselClicked",
    value: function carouselClicked() {
      this.props.toggleShowOpener();
      this.props.openerSetForm(this.state.carouselPage);
    }
  }, {
    key: "closerClicked",
    value: function closerClicked() {
      this.props.closerClicked();
    }
  }, {
    key: "b1clicked",
    value: function b1clicked() {
      clearInterval(this.state.scroller);
      var scroller = setInterval(this.scroll, 5000);
      this.setState({
        carouselPage: 1,
        scroller: scroller
      });
    }
  }, {
    key: "b2clicked",
    value: function b2clicked() {
      clearInterval(this.state.scroller);
      var scroller = setInterval(this.scroll, 5000);
      this.setState({
        carouselPage: 2,
        scroller: scroller
      });
    }
  }, {
    key: "b3clicked",
    value: function b3clicked() {
      clearInterval(this.state.scroller);
      var scroller = setInterval(this.scroll, 5000);
      this.setState({
        carouselPage: 3,
        scroller: scroller
      });
    }
  }, {
    key: "b4clicked",
    value: function b4clicked() {
      clearInterval(this.state.scroller);
      var scroller = setInterval(this.scroll, 5000);
      this.setState({
        carouselPage: 4,
        scroller: scroller
      });
    }
  }, {
    key: "b5clicked",
    value: function b5clicked() {
      clearInterval(this.state.scroller);
      var scroller = setInterval(this.scroll, 5000);
      this.setState({
        carouselPage: 5,
        scroller: scroller
      });
    }
    /* functions called upon rendering */

  }, {
    key: "getCarouselMessage",
    value: function getCarouselMessage(page) {
      return carouselMessage[page];
    }
  }, {
    key: "getButtonMessage",
    value: function getButtonMessage(page) {
      return buttonMessage[page];
    }
  }, {
    key: "checkShowCarousel",
    value: function checkShowCarousel() {
      if (!this.props.showOpener) {
        return "1s " + "carousel" + this.state.animation + "disappear" + " both";
      } else {
        return "1s " + "carousel" + this.state.animation + "appear" + " both";
      }
    }
  }, {
    key: "addAnimations",
    value: function addAnimations(str) {
      var animationStyle = {
        animation: str
      };
      var style1 = this.state.carouselStyles;

      var _final = _objectSpread({}, animationStyle, {}, style1);

      return _final;
    }
  }, {
    key: "render",
    value: function render() {
      var str1 = this.getCarouselMessage(this.state.carouselPage);
      var str2 = this.getButtonMessage(this.state.carouselPage);
      var str = this.checkShowCarousel();
      var finalStyle = this.addAnimations(str);
      return _react["default"].createElement("div", {
        style: finalStyle,
        className: "carousel"
      }, _react["default"].createElement("button", {
        type: "button",
        style: this.state.closerPlacement,
        onClick: this.closerClicked,
        className: "carouselCloser"
      }, "\u2716"), _react["default"].createElement("div", null, str1, _react["default"].createElement("button", {
        style: {
          fontSize: this.state.carouselStyles.fontSize
        },
        className: "carouselBtn",
        type: "button",
        onClick: this.carouselClicked
      }, str2)), _react["default"].createElement("div", {
        className: "dotContainer"
      }, _react["default"].createElement("span", {
        id: "b1",
        className: "dot"
      }), _react["default"].createElement("span", {
        id: "b2",
        className: "dot"
      }), _react["default"].createElement("span", {
        id: "b3",
        className: "dot"
      }), _react["default"].createElement("span", {
        id: "b4",
        className: "dot"
      }), _react["default"].createElement("span", {
        id: "b5",
        className: "dot"
      })));
    }
  }]);

  return FeedbackCarousel;
}(_react["default"].Component);

exports["default"] = FeedbackCarousel;