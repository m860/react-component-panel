import React, {PropTypes, Component} from 'react'
import ReactDOM from 'react-dom'
import './sass/Panel.sass'
import Panel from './components/Panel'

class PanelDemo extends Component{
	render(){
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

class Example extends Component {
	render() {
		return (
			<div style={{paddingBottom:"50px"}}>
				<h5>Simple Panel</h5>
				<PanelDemo/>
			</div>
		);
	}
}

ReactDOM.render(
	<Example></Example>
	, document.getElementById("view"));