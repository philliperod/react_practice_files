import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Create UI with React's createElement ----------------------------------

// get access to some element on the page which is ID 'root'
// create the react elements
// render the variable 'element' to the variable 'rootelement'

// const rootElement = document.getElementById('root');
// const element = React.createElement('div', {
//   children: 'Hello to the whole world',
//   className: 'container'
// });
// console.log(element);
// ReactDOM.render(element, rootElement);
// serviceWorker.unregister();

// Create UI with React's JSX syntax ----------------------------------

const rootElement = document.getElementById('root');
// this is the same as react CreateElement but with JSX; results will be the same
// this code will be complied by Babel
const element = <div className="container">Hello World again</div>;

ReactDOM.render(element, rootElement);
serviceWorker.unregister();
