import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';

import Dashboard from './dashboard';
import LoginForm from "./login_form";
import CardScreen from './CardScreen.js'

const authContextObj = {
	auth: false,
	authenticate: () => {},
	logout: () => {}
};

const AuthContext = React.createContext(authContextObj);
AuthContext.displayName = "AppAuthContext";

function PrivateRoute({component: Component, ...rest}) {
	return (
		<AuthContext.Consumer>
			{(authContext) => <Route {...rest}
			render={(routeProps) => authContext.auth  ? <Component {...routeProps} />: 
			(<Redirect to="/login" />) }  />}
		</AuthContext.Consumer>
	);
}

class App extends React.Component {
	constructor(props) {
		super(props);

		this.login = () => {
			this.setState(state => ({
				auth: true
			}));
		};

		this.logout = () => {
			this.setState(state => ({
				auth: false
			}));
		}
		
		this.state = {
			auth: false,
			authenticate: this.login,
			logout: this.logout
		};
	}

	
	render() {
		return (
			<div className="App">
				<AuthContext.Provider value={this.state}>
					<Router>
						<AuthContext.Consumer>
							{(authContext) => (
								<Route exact path="/login">
									<LoginForm onLogin={authContext.authenticate} />
								</Route>
							)}
						</AuthContext.Consumer>
						<PrivateRoute path="/" component={Dashboard} />
						<PrivateRoute path="/card_board" component={CardScreen} /> 
					</Router>
				</AuthContext.Provider>
			</div>
		);
	}
}
export default App;
