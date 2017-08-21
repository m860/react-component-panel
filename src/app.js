import React, {PropTypes, Component} from 'react'
import ReactDOM from 'react-dom'
import './sass/Panel.sass'
import Panel from './components/Panel'
import CollapsiblePanel from './components/CollapsiblePanel'

class PanelDemo extends Component {
	render() {
		return (
			<Panel title="Panel Title" renderRight={()=>{
				return (
					<button type="button" onClick={()=>{
						alert('pressed');
					}}>press me</button>
				);
			}}>
				<p>panel content</p>
			</Panel>
		);
	}
}

class CollapsiblePanelDemo extends Component {
	render() {
		return (
			<CollapsiblePanel title="Collapsible Panel Demo">
				<p>I am collapsible panel !</p>
			</CollapsiblePanel>
		);
	}
}

class Example extends Component {
	render() {
		return (
			<div style={{paddingBottom:"50px"}}>
				<h5>Simple Panel</h5>
				<PanelDemo/>
				<h5>Simple Collapsible Panel</h5>
				<CollapsiblePanelDemo/>
			</div>
		);
	}
}

ReactDOM.render(
	<Example></Example>
	, document.getElementById("view"));