import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Dashboard from './dashboard';
import LoginForm from "./login_form";
import CardScreen from './CardScreen.js'

function App(props) {
	return (
		<div className="App">
			<Router>
				{/* <Switch> */}
					<Route exact path="/" component={LoginForm} />
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/cardscreen" component={CardScreen} />
				{/* </Switch> */}
			</Router>
		</div>
	);
}
export default App;
