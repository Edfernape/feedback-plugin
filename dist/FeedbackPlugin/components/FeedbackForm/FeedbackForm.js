"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./FeedbackForm.css");

var _PageSelect = _interopRequireDefault(require("./PageSelect/PageSelect"));

var _PageForm = _interopRequireDefault(require("./PageForm/PageForm"));

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

var FeedbackForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FeedbackForm, _React$Component);

  function FeedbackForm(props) {
    var _this;

    _classCallCheck(this, FeedbackForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FeedbackForm).call(this, props));
    _this.state = {
      theme: _this.setTheme(_this.props.theme),
      formPlacement: _this.setPlacement(_this.props.formPlacement),
      formCategory: _this.props.formCategory,
      formPage: 1,
      formStyles: {}
    };
    _this.drag = _this.drag.bind(_assertThisInitialized(_this));
    _this.formCloserClicked = _this.formCloserClicked.bind(_assertThisInitialized(_this));
    _this.childSetPage = _this.childSetPage.bind(_assertThisInitialized(_this));
    _this.setCat = _this.setCat.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FeedbackForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.checkCategory(this.props.formCategory);
      var theme = this.state.theme;
      var placement = this.state.formPlacement;

      var styles = _objectSpread({}, theme, {}, placement);

      this.setState({
        formStyles: styles
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.formPage == 3) {
        setTimeout(this.formCloserClicked, 800);
      }
    }
  }, {
    key: "checkCategory",
    value: function checkCategory(cat) {
      if (cat != 6) {
        this.setState({
          formPage: 2
        });
      } else {
        this.setState({
          formPage: 1
        });
      }
    }
    /* functions to set form state */

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
    key: "setPlacement",
    value: function setPlacement(placement) {
      switch (placement) {
        case 'top':
          return {
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)"
          };

        case 'top-right':
          return {
            top: "20px",
            right: "20px"
          };

        case 'right':
          return {
            right: "20px",
            top: "50%",
            transform: "translateY(-50%)"
          };

        case 'bottom-right':
          return {
            bottom: "20px",
            right: "20px"
          };

        case 'bottom':
          return {
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)"
          };

        case 'bottom-left':
          return {
            bottom: "20px",
            left: "20px"
          };

        case 'left':
          return {
            left: "20px",
            top: "50%",
            transform: "translateY(-50%)"
          };

        case 'top-left':
          return {
            top: "20px",
            left: "20px"
          };

        case 'centre':
          return {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          };

        default:
          return {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          };
      }
    }
    /* children's functions */

  }, {
    key: "childSetPage",
    value: function childSetPage(page) {
      this.setState({
        formPage: page
      });
    }
  }, {
    key: "setCat",
    value: function setCat(cat) {
      this.setState({
        formCategory: cat
      });
    }
    /* onClick functions */

  }, {
    key: "formCloserClicked",
    value: function formCloserClicked() {
      this.props.toggleShowForm();
      this.props.toggleShowOpener();
    }
    /* local drag function */

  }, {
    key: "drag",
    value: function drag() {
      var pos1 = 0,
          pos2 = 0,
          pos3 = 0,
          pos4 = 0;
      document.getElementById("formdragbar").onmousedown = handleDrag;

      function handleDrag(e) {
        e = e || window.event;
        e.preventDefault(); // get the mouse cursor position at startup:

        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = stopDrag; // call a function whenever the cursor moves:

        document.onmousemove = startDrag;
      }

      function startDrag(e) {
        e = e || window.event;
        e.preventDefault(); // calculate the new cursor position:

        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY; // set the element's new position:

        document.getElementById("form").style.top = document.getElementById("form").offsetTop - pos2 + "px";
        document.getElementById("form").style.left = document.getElementById("form").offsetLeft - pos1 + "px";
      }

      function stopDrag() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
    /* functions called upon rendering */

  }, {
    key: "setPage",
    value: function setPage(page) {
      switch (page) {
        case 1:
          return _react["default"].createElement(_PageSelect["default"], {
            formCategory: this.state.formCategory,
            setCat: this.setCat,
            childSetPage: this.childSetPage
          });

        case 2:
          return _react["default"].createElement(_PageForm["default"], {
            formCategory: this.state.formCategory,
            setCat: this.setCat,
            childSetPage: this.childSetPage
          });

        case 3:
          return _react["default"].createElement("h2", {
            style: {
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              position: "absolute"
            }
          }, "Thank you!");

        default:
          return _react["default"].createElement(_PageSelect["default"], {
            formCategory: this.state.formCategory,
            setCat: this.setCat,
            childSetPage: this.childSetPage
          });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var page = this.setPage(this.state.formPage);
      return _react["default"].createElement("div", {
        style: this.state.formStyles,
        className: "form",
        id: "form"
      }, _react["default"].createElement("div", {
        onMouseOver: this.drag,
        className: "formdragbar",
        id: "formdragbar"
      }), _react["default"].createElement("button", {
        onClick: this.formCloserClicked,
        type: "button",
        className: "formCloser"
      }, "\u2716"), page);
    }
  }]);

  return FeedbackForm;
}(_react["default"].Component);

exports["default"] = FeedbackForm;