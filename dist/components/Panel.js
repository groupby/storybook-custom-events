"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Panel = void 0;

var _react = _interopRequireDefault(require("react"));

var _coreEvents = require("@storybook/core-events");

var _core = require("@emotion/core");

var _UI = require("./UI");

var _constants = require("../constants");

var _Event = require("./Event");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Panel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Panel, _React$Component);

  function Panel(props) {
    var _this;

    _classCallCheck(this, Panel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Panel).call(this, props));
    _this.state = {
      events: []
    };
    _this.api = props.api || {};
    _this.addBlankEvent = _this.addBlankEvent.bind(_assertThisInitialized(_this));
    _this.storyChanged = _this.storyChanged.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Panel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.api.on(_coreEvents.STORY_RENDERED, this.storyChanged);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.off(_coreEvents.STORY_RENDERED, this.storyChanged);
    }
  }, {
    key: "storyChanged",
    value: function storyChanged(id) {
      this.setState({
        events: []
      });
      this.setState({
        events: this.api.getParameters(id, _constants.ADDON_ID) || []
      });
    }
  }, {
    key: "addBlankEvent",
    value: function addBlankEvent() {
      this.setState({
        events: [].concat(_toConsumableArray(this.state.events), [{
          name: '',
          payload: ''
        }])
      });
    }
  }, {
    key: "render",
    value: function render() {
      var active = this.props.active;
      var events = this.state.events;
      return active ? _react["default"].createElement(_UI.Flex, null, _react["default"].createElement(_UI.Card, {
        className: "secondary"
      }, _react["default"].createElement("h1", null, "Samples"), events.map(function (event, index) {
        return _react["default"].createElement(_UI.Button, {
          className: "secondary"
        }, event.name);
      })), _react["default"].createElement(_UI.Card, null, _react["default"].createElement("h1", null, "Edit"))) : null;
    }
  }]);

  return Panel;
}(_react["default"].Component);

exports.Panel = Panel;