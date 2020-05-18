import React from 'react';//core of package that does DOM manipulator
import ReactDOM from 'react-dom';
import './index.css'; //. represents its in the same directory
import App from './containers/App';

import * as serviceWorker from './serviceWorker';
import 'tachyons'; //now we are having access to tacayons



ReactDOM.render(
				<App />
  ,document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
