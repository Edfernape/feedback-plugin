"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _FeedbackCarousel = _interopRequireDefault(require("./components/FeedbackCarousel/FeedbackCarousel"));

var _FeedbackBasic = _interopRequireDefault(require("./components/FeedbackBasic/FeedbackBasic"));

var _FeedbackForm = _interopRequireDefault(require("./components/FeedbackForm/FeedbackForm"));

require("./FeedbackPlugin.css");

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

function popupWindow(url, title, win, w, h) {
  var y = win.top.outerHeight / 2 + win.top.screenY - h / 2;
  var x = win.top.outerWidth / 2 + win.top.screenX - w / 2;
  return win.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + y + ', left=' + x);
}

var FeedbackPlugin =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FeedbackPlugin, _React$Component);

  function FeedbackPlugin(props) {
    var _this;

    _classCallCheck(this, FeedbackPlugin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FeedbackPlugin).call(this, props));
    _this.state = {
      theme: _this.checkTheme(_this.props.theme),
      openerType: _this.props.openerType,
      openerPlacement: _this.checkOpenerPlacement(_this.props.openerPlacement),
      openerSize: _this.checkOpenerSize(_this.props.openerSize),
      showOpener: true,
      formIsPopup: _this.props.formIsPopup,
      formPlacement: _this.props.formPlacement,
      formCategory: null,
      showForm: null
    };
    _this.openerSetForm = _this.openerSetForm.bind(_assertThisInitialized(_this));
    _this.toggleShowOpener = _this.toggleShowOpener.bind(_assertThisInitialized(_this));
    _this.toggleShowForm = _this.toggleShowForm.bind(_assertThisInitialized(_this));
    _this.closerClicked = _this.closerClicked.bind(_assertThisInitialized(_this));
    return _this;
  }
  /* constructor's functions to check props and use defaults if they're not specified */


  _createClass(FeedbackPlugin, [{
    key: "checkTheme",
    value: function checkTheme(theme) {
      switch (theme) {
        case 'red':
          return 'red';

        case 'yellow':
          return 'yellow';

        case 'blue':
          return 'blue';

        case 'green':
          return 'green';

        case 'orange':
          return 'orange';

        case 'purple':
          return 'purple';

        case 'dark':
          return 'dark';

        case 'light':
          return 'light';

        default:
          return 'blue';
      }
    }
  }, {
    key: "checkOpenerPlacement",
    value: function checkOpenerPlacement(openerPlacement) {
      switch (openerPlacement) {
        case 'top':
          return 'top';

        case 'top-right':
          return 'top-right';

        case 'right':
          return 'right';

        case 'bottom-right':
          return 'bottom-right';

        case 'bottom':
          return 'bottom';

        case 'bottom-left':
          return 'bottom-left';

        case 'left':
          return 'left';

        case 'top-left':
          return 'top-left';

        default:
          return 'bottom-right';
      }
    }
  }, {
    key: "checkOpenerSize",
    value: function checkOpenerSize(openerSize) {
      switch (openerSize) {
        case 'small':
          return 'small';

        case 'medium':
          return 'medium';

        case 'large':
          return 'large';

        default:
          return 'medium';
      }
    }
    /* functions used by children */

  }, {
    key: "openerSetForm",
    value: function openerSetForm(cat) {
      switch (cat) {
        case 1:
          this.setState({
            formCategory: 1,
            showForm: true
          }); // general feedback

          break;

        case 2:
          this.setState({
            formCategory: 2,
            showForm: true
          }); // usability issue

          break;

        case 3:
          this.setState({
            formCategory: 3,
            showForm: true
          }); // bug report

          break;

        case 4:
          this.setState({
            formCategory: 4,
            showForm: true
          }); // vulnerability report

          break;

        case 5:
          this.setState({
            formCategory: 5,
            showForm: true
          }); // feature suggestion

          break;

        case 6:
          this.setState({
            formCategory: 6,
            showForm: true
          }); // shows all selection; page 1

          break;

        default:
          this.setState({
            formCategory: 1,
            showForm: true
          });
        // general feedback
      }
    }
  }, {
    key: "toggleShowOpener",
    value: function toggleShowOpener() {
      this.setState({
        showOpener: !this.state.showOpener
      });
    }
  }, {
    key: "closerClicked",
    value: function closerClicked() {
      this.setState({
        showOpener: false
      });
    }
  }, {
    key: "toggleShowForm",
    value: function toggleShowForm() {
      this.setState({
        showForm: !this.state.showForm
      });
    }
    /* functions used upon rendering opener or form */

  }, {
    key: "checkOpenerType",
    value: function checkOpenerType(openerType) {
      switch (openerType) {
        case 'basic':
          return _react["default"].createElement(_FeedbackBasic["default"], {
            theme: this.state.theme,
            openerSize: this.state.openerSize,
            openerPlacement: this.state.openerPlacement,
            openerSetForm: this.openerSetForm,
            showOpener: this.state.showOpener,
            toggleShowOpener: this.toggleShowOpener,
            closerClicked: this.closerClicked
          });

        case 'carousel':
          return _react["default"].createElement(_FeedbackCarousel["default"], {
            theme: this.state.theme,
            openerSize: this.state.openerSize,
            openerPlacement: this.state.openerPlacement,
            openerSetForm: this.openerSetForm,
            showOpener: this.state.showOpener,
            toggleShowOpener: this.toggleShowOpener,
            closerClicked: this.closerClicked
          });

        default:
          return _react["default"].createElement(_FeedbackBasic["default"], {
            theme: this.state.theme,
            openerSize: this.state.openerSize,
            openerPlacement: this.state.openerPlacement,
            openerSetForm: this.openerSetForm,
            showOpener: this.state.showOpener,
            toggleShowOpener: this.toggleShowOpener,
            closerClicked: this.closerClicked
          });
      }
    }
  }, {
    key: "checkFormType",
    value: function checkFormType(formIsPopup, showForm) {
      if (showForm === null) {
        return null;
      } else {
        if (formIsPopup === true) {
          // popup form if showForm is true
          if (showForm === true) {
            popupWindow("http://localhost:8081", "", window, 400, 400);
          }
        } else {
          // render form depending on showForm true or false
          if (showForm === true) {
            return _react["default"].createElement(_FeedbackForm["default"], {
              theme: this.state.theme,
              formPlacement: this.state.formPlacement,
              formCategory: this.state.formCategory,
              toggleShowForm: this.toggleShowForm,
              toggleShowOpener: this.toggleShowOpener
            });
          }
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var opener = this.checkOpenerType(this.state.openerType);
      var form = this.checkFormType(this.props.formIsPopup, this.state.showForm);
      return _react["default"].createElement("div", null, opener, form);
    }
  }]);

  return FeedbackPlugin;
}(_react["default"].Component);

exports["default"] = FeedbackPlugin;