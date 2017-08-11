"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Panel
 *
 * @example <caption>Simple Panel Demo</caption>
 * class PanelDemo extends Component{
 *	render(){
 *		return (
 *			<Panel title="Panel Title" renderRight={()=>{
 *				return (
 *					<button type="button" onClick={()=>{
 *						alert('pressed');
 *					}}>press me</button>
 *				);
 *			}}>
 *				<p>panel content</p>
 *			</Panel>
 *		);
 *	}
 * }
 *
 * */
var Panel = function (_PureComponent) {
	_inherits(Panel, _PureComponent);

	function Panel() {
		_classCallCheck(this, Panel);

		return _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).apply(this, arguments));
	}

	_createClass(Panel, [{
		key: "render",

		/**
   * @property {String|ReactNode|HtmlElement} title - 标题
   * @property {?Function} renderRight [ ()=>null ] - 右侧按钮
   * @property {?Object} style - 样式
   * @property {?String} className - class style
   * */
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: (0, _classnames2.default)("panel", this.props.className), style: this.props.style },
				_react2.default.createElement(
					"div",
					{ className: "panel-header" },
					_react2.default.createElement(
						"div",
						{ className: "panel-header-title" },
						this.props.title
					),
					_react2.default.createElement(
						"div",
						{ className: "panel-header-right" },
						this.props.renderRight()
					)
				),
				_react2.default.createElement(
					"div",
					{ className: "panel-content" },
					this.props.children
				)
			);
		}
	}]);

	return Panel;
}(_react.PureComponent);

Panel.propTypes = {
	title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node, _propTypes2.default.element]).isRequired,
	renderRight: _propTypes2.default.func,
	style: _propTypes2.default.object,
	className: _propTypes2.default.any
};
Panel.defaultProps = {
	renderRight: function renderRight() {
		return null;
	}
};
exports.default = Panel;