import React from "react";
import { Link } from 'react-router-dom'
import '../css/settings.css';
class Settings extends React.Component {
	constructor(props) {
		super(props)
		this.saveSettings = this.saveSettings.bind(this);
	}
	saveSettings(e) {
		e.preventDefault();
		console.log(this);
	}

	render() {
		return (
			<div className="settings">
				<nav className="titleBar">
					<h1>Settings</h1>
				</nav>
				<section className="settings__inputs">
					<label for="frequency">
						Frequency of notifications:
          </label>
					<select id="frequency">
						<option value="never">Never</option>
						<option value="daily">Daily</option>
						<option value="twice">Twice a day</option>
						<option value="hourly">Hourly</option>
					</select>
					<label for="type">
						Card types to use for notifications:
          </label>
					<select id="type">
						<option value="all">All Types</option>
						<option value="ch/re">Challenge/Response</option>
						<option value="tip">Tip</option>
						<option value="t/f">True/Falses</option>
					</select>
					<button type="button" id="save" onClick={this.saveSettings}><Link className="saveButton" to="/">Save Settings</Link></button>
				</section>
			</div>
		);
	}
}

export default Settings;
