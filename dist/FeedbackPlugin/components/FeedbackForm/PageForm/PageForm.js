"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./PageForm.css");

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

var data = {
  1: {
    heading: "General Feedback Form",
    pointers: "",
    ask: "Please indicate how urgent/important you would consider your feedback:",
    desc: "urgent/important"
  },
  2: {
    heading: "Usability Issue Reporting Form",
    pointers: "",
    ask: "Please indicate the severity of this issue:",
    desc: "severe"
  },
  3: {
    heading: "Bug Reporting Form",
    pointers: "",
    ask: "Please indicate the severity of this bug:",
    desc: "severe"
  },
  4: {
    heading: "Vulnerability Reporting Form",
    pointers: "",
    ask: "Please indicate the severity of this vulnerability:",
    desc: "severe"
  },
  5: {
    heading: "Feature Suggestion Form",
    pointers: "",
    ask: "Please rate how helpful or necessary you think this feature would be:",
    desc: "helpful/necessary"
  }
};

var PageForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PageForm, _React$Component);

  function PageForm(props) {
    var _this;

    _classCallCheck(this, PageForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PageForm).call(this, props));
    _this.state = {
      formCategory: _this.props.formCategory,
      title: "",
      mainText: "",
      rating: 3
    };
    _this.p2back = _this.p2back.bind(_assertThisInitialized(_this));
    _this.p2submit = _this.p2submit.bind(_assertThisInitialized(_this));
    _this.titleChange = _this.titleChange.bind(_assertThisInitialized(_this));
    _this.mainTextChange = _this.mainTextChange.bind(_assertThisInitialized(_this));
    _this.rate1clicked = _this.rate1clicked.bind(_assertThisInitialized(_this));
    _this.rate2clicked = _this.rate2clicked.bind(_assertThisInitialized(_this));
    _this.rate3clicked = _this.rate3clicked.bind(_assertThisInitialized(_this));
    _this.rate4clicked = _this.rate4clicked.bind(_assertThisInitialized(_this));
    _this.rate5clicked = _this.rate5clicked.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PageForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.getElementById("p2back").addEventListener("click", this.p2back);
      document.getElementById("p2form").addEventListener("submit", this.p2submit);
      document.getElementById("rate1").addEventListener("click", this.rate1clicked);
      document.getElementById("rate2").addEventListener("click", this.rate2clicked);
      document.getElementById("rate3").addEventListener("click", this.rate3clicked);
      document.getElementById("rate4").addEventListener("click", this.rate4clicked);
      document.getElementById("rate5").addEventListener("click", this.rate5clicked);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.getElementById("p2back").removeEventListener("click", this.p2back);
      document.getElementById("p2form").removeEventListener("submit", this.p2submit);
      document.getElementById("rate1").removeEventListener("click", this.rate1clicked);
      document.getElementById("rate2").removeEventListener("click", this.rate2clicked);
      document.getElementById("rate3").removeEventListener("click", this.rate3clicked);
      document.getElementById("rate4").removeEventListener("click", this.rate4clicked);
      document.getElementById("rate5").removeEventListener("click", this.rate5clicked);
    }
  }, {
    key: "titleChange",
    value: function titleChange(e) {
      this.setState({
        title: e.target.value
      });
    }
  }, {
    key: "mainTextChange",
    value: function mainTextChange(e) {
      this.setState({
        mainText: e.target.value
      });
    }
  }, {
    key: "rate1clicked",
    value: function rate1clicked() {
      this.setState({
        rating: 1
      });
    }
  }, {
    key: "rate2clicked",
    value: function rate2clicked() {
      this.setState({
        rating: 2
      });
    }
  }, {
    key: "rate3clicked",
    value: function rate3clicked() {
      this.setState({
        rating: 3
      });
    }
  }, {
    key: "rate4clicked",
    value: function rate4clicked() {
      this.setState({
        rating: 4
      });
    }
  }, {
    key: "rate5clicked",
    value: function rate5clicked() {
      this.setState({
        rating: 5
      });
    }
  }, {
    key: "p2back",
    value: function p2back() {
      this.props.childSetPage(1);
    }
  }, {
    key: "p2submit",
    value: function p2submit() {
      event.preventDefault(); //using fetch to post

      fetch("http://localhost:3000/post-feedback", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          category: this.state.formCategory,
          title: this.state.title,
          mainText: this.state.mainText,
          rating: this.state.rating,
          multiplier: this.getMultiplier(this.state.formCategory)
        })
      }).then(function (response) {
        if (!response.ok) {
          console.log("Response: ");
          console.log(response);
          console.log("POST feedback response not ok."); // console.log("Headers: "+response.headers);
        } else {
          console.log("Response: ");
          console.log(response); // return response.json();

          return JSON.stringify(response);
        }
      }).then(function (json) {
        console.log("JSON: ");
        console.log(json);
      })["catch"](function (error) {
        console.log("Error posting feedback: " + error);
      });
      this.props.childSetPage(3);
    }
  }, {
    key: "getMultiplier",
    value: function getMultiplier(cat) {
      switch (cat) {
        case 1:
          return 2;

        case 2:
          return 4;

        case 3:
          return 4;

        case 4:
          return 6;

        case 5:
          return 1;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("form", {
        id: "p2form",
        className: "p2"
      }, _react["default"].createElement("h3", {
        style: {
          margin: "15px 0px"
        }
      }, data[this.state.formCategory].heading), _react["default"].createElement("input", {
        value: this.state.title,
        className: "p2f1",
        maxLength: "150",
        type: "text",
        placeholder: "Enter a suitable title here.",
        onChange: this.titleChange,
        required: true,
        autoFocus: true
      }), _react["default"].createElement("textarea", {
        value: this.state.mainText,
        maxLength: "1000",
        wrap: "hard",
        rows: "8",
        required: true,
        className: "p2f2",
        placeholder: "Enter your response here.",
        onChange: this.mainTextChange
      }), _react["default"].createElement("h5", {
        className: "p2f3"
      }, data[this.state.formCategory].ask), _react["default"].createElement("div", {
        id: "rateDiv",
        style: {
          display: "flex",
          flexDirection: "row-reverse",
          margin: "5px 10px"
        },
        className: "p2rating"
      }, _react["default"].createElement("input", {
        id: "rate5",
        name: "rating",
        type: "radio",
        value: "5"
      }), _react["default"].createElement("label", {
        title: "Extremely " + data[this.state.formCategory].desc,
        htmlFor: "rate5"
      }, "\u2605"), _react["default"].createElement("input", {
        id: "rate4",
        name: "rating",
        type: "radio",
        value: "4"
      }), _react["default"].createElement("label", {
        title: "Very " + data[this.state.formCategory].desc,
        htmlFor: "rate4"
      }, "\u2605"), _react["default"].createElement("input", {
        id: "rate3",
        name: "rating",
        type: "radio",
        value: "3",
        defaultChecked: true
      }), _react["default"].createElement("label", {
        title: "Quite " + data[this.state.formCategory].desc,
        htmlFor: "rate3"
      }, "\u2605"), _react["default"].createElement("input", {
        id: "rate2",
        name: "rating",
        type: "radio",
        value: "2"
      }), _react["default"].createElement("label", {
        title: "Fairly " + data[this.state.formCategory].desc,
        htmlFor: "rate2"
      }, "\u2605"), _react["default"].createElement("input", {
        id: "rate1",
        name: "rating",
        type: "radio",
        value: "1"
      }), _react["default"].createElement("label", {
        title: "Somewhat " + data[this.state.formCategory].desc,
        htmlFor: "rate1"
      }, "\u2605")), _react["default"].createElement("input", {
        className: "p2submit",
        type: "submit",
        value: "Submit"
      }), _react["default"].createElement("button", {
        id: "p2back",
        className: "p2back",
        type: "button"
      }, "Back"));
    }
  }]);

  return PageForm;
}(_react["default"].Component);

exports["default"] = PageForm;