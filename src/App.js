import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import MainScreen from './MainScreen.js';

import Home from "./routes/home.js";
import LoginForm from "./login_form";
import Settings from "./routes/settings.js"
import AddCard from "./routes/addcard.js"
import CardScreen from './CardScreen.js'

function App(props) {
	return (
		<Router>
			<div className="App">
				<Route exact path="/" component={LoginForm} />
				<Route exact path="/mainscreen" component={MainScreen} />
				<Route path="/settings" component={Settings} />
				<Route path="/addcard" component={AddCard} />
				<Route path="/cardscreen" component={CardScreen} />
			</div>
		</Router>
	);
}
export default App;
