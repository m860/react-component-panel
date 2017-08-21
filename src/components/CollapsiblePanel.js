import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Panel from './Panel'

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
export default class CollapsiblePanel extends PureComponent {
	/**
	 * {@link Panel.propTypes ...Panel.propTypes}
	 * @property {?Object} contentStyle
	 * @property {?String} contentClassName
	 * @property {?Boolean} expand [ true ] - 是否展开
	 * @property {?Function} renderExpand [ expand=> {return expand ? "收起" : "展开";} ] - 展开/收起的UI样式
	 * @property {?Function} onChange - 当expand发生变化时调用
	 * */
	static propTypes = {
		...Panel.propTypes,
		contentStyle: PropTypes.object,
		contentClassName: PropTypes.string,
		expand: PropTypes.bool,
		renderExpand: PropTypes.func,
		onChange: PropTypes.func
	};
	static defaultProps = {
		...Panel.defaultProps,
		expand: true,
		renderExpand: expand=> {
			return expand ? "收起" : "展开";
		},
		onChange: ()=>null
	};

	constructor(props) {
		super(props);
		this.state = {
			expand: props.expand
		};
	}

	render() {
		const {expand}=this.state;
		return (
			<Panel
				style={this.props.style}
				className={this.props.className}
				title={this.props.title}
				renderRight={()=>{
					return (
						<div>
							{this.props.renderRight()}
							<a href="javascript:void(0)" onClick={()=>{
								this.setState({
									expand:!expand
								},()=>{
									this.props.onChange(expand);
								})
							}}>{this.props.renderExpand(expand)}</a>
						</div>
					);
				}}>
				{expand &&
				<div
					className={this.props.contentClassName}
					style={this.props.contentStyle}>
					{this.props.children}
				</div>}
			</Panel>
		);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.expand !== this.state.expand) {
			this.setState({
				expand: nextProps.expand
			});
		}
	}
}