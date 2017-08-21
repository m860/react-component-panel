"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Panel = require("./Panel");

var _Panel2 = _interopRequireDefault(_Panel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * CollapsiblePanel
 *
 * @example
 * class CollapsiblePanelDemo extends Component {
 *	render() {
 *		return (
 *			<CollapsiblePanel title="Collapsible Panel Demo">
 *				<p>I am collapsible panel !</p>
 *			</CollapsiblePanel>
 *		);
 *	}
 * }
 * */
var CollapsiblePanel = function (_PureComponent) {
	_inherits(CollapsiblePanel, _PureComponent);

	/**
  * {@link Panel.propTypes ...Panel.propTypes}
  * @property {?Object} contentStyle
  * @property {?String} contentClassName
  * @property {?Boolean} expand [ true ] - 是否展开
  * @property {?Function} renderExpand [ expand=> {return expand ? "收起" : "展开";} ] - 展开/收起的UI样式
  * @property {?Function} onChange - 当expand发生变化时调用
  * */
	function CollapsiblePanel(props) {
		_classCallCheck(this, CollapsiblePanel);

		var _this = _possibleConstructorReturn(this, (CollapsiblePanel.__proto__ || Object.getPrototypeOf(CollapsiblePanel)).call(this, props));

		_this.state = {
			expand: props.expand
		};
		return _this;
	}

	_createClass(CollapsiblePanel, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			var expand = this.state.expand;

			return _react2.default.createElement(
				_Panel2.default,
				{
					style: this.props.style,
					className: this.props.className,
					title: this.props.title,
					renderRight: function renderRight() {
						return _react2.default.createElement(
							"div",
							null,
							_this2.props.renderRight(),
							_react2.default.createElement(
								"a",
								{ href: "javascript:void(0)", onClick: function onClick() {
										_this2.setState({
											expand: !expand
										}, function () {
											_this2.props.onChange(expand);
										});
									} },
								_this2.props.renderExpand(expand)
							)
						);
					} },
				expand && _react2.default.createElement(
					"div",
					{
						className: this.props.contentClassName,
						style: this.props.contentStyle },
					this.props.children
				)
			);
		}
	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.expand !== this.state.expand) {
				this.setState({
					expand: nextProps.expand
				});
			}
		}
	}]);

	return CollapsiblePanel;
}(_react.PureComponent);

CollapsiblePanel.propTypes = _extends({}, _Panel2.default.propTypes, {
	contentStyle: _propTypes2.default.object,
	contentClassName: _propTypes2.default.string,
	expand: _propTypes2.default.bool,
	renderExpand: _propTypes2.default.func,
	onChange: _propTypes2.default.func
});
CollapsiblePanel.defaultProps = _extends({}, _Panel2.default.defaultProps, {
	expand: true,
	renderExpand: function renderExpand(expand) {
		return expand ? "收起" : "展开";
	},
	onChange: function onChange() {
		return null;
	}
});
exports.default = CollapsiblePanel;