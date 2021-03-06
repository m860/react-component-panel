# react-component-panel

<!-- badge -->

[![npm version](https://img.shields.io/npm/v/react-component-panel.svg)](https://www.npmjs.com/package/react-component-panel)
[![npm license](https://img.shields.io/npm/l/react-component-panel.svg)](https://www.npmjs.com/package/react-component-panel)
[![npm download](https://img.shields.io/npm/dm/react-component-panel.svg)](https://www.npmjs.com/package/react-component-panel)
[![npm download](https://img.shields.io/npm/dt/react-component-panel.svg)](https://www.npmjs.com/package/react-component-panel)

<!-- endbadge -->

## Screen Shot

<img src="https://raw.githubusercontent.com/m860/react-component-panel/master/src/simple-panel.png"/>

<img src="https://raw.githubusercontent.com/m860/react-component-panel/master/src/simple-collapsible-panel-demo.gif"/>

## Install

```shell
$ npm i react-component-panel --save
```

## Import

```javascript
import {Panel,CollapsiblePanel} from 'react-component-panel'
```

## TODO

-   [x] Panel
-   [x] CollapsiblePanel

# API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## CollapsiblePanel

**Extends PureComponent**

CollapsiblePanel

**Parameters**

-   `props`  

**Examples**

```javascript
class CollapsiblePanelDemo extends Component {
render() {
	return (
		<CollapsiblePanel title="Collapsible Panel Demo">
			<p>I am collapsible panel !</p>
		</CollapsiblePanel>
	);
}
}
```

### propTypes

[...Panel.propTypes](#panelproptypes)

**Properties**

-   `contentStyle` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)?** 
-   `contentClassName` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)?** 
-   `expand` **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?** [ true ] - 是否展开
-   `renderExpand` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)?** [ expand=> {return expand ? "收起" : "展开";} ] - 展开/收起的UI样式
-   `onChange` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)?** 当expand发生变化时调用

## Panel

**Extends PureComponent**

Panel

**Examples**

_Simple Panel Demo_

```javascript
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
```

### propTypes

**Properties**

-   `title` **([String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ReactNode | [HtmlElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element))** 标题
-   `renderRight` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)?** [ ()=>null ] - 右侧按钮
-   `style` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)?** 样式
-   `className` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)?** class style
