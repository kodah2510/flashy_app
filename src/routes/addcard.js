import React from "react";
import { Link } from 'react-router-dom'
import '../css/addCard.css';
class AddCard extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			type: 'tip',
			front: '',
			back: ''
		};
		this.addCard = this.addCard.bind(this);
		this.handleFront = this.handleFront.bind(this);
		this.handleType = this.handleType.bind(this);
		this.handleBack = this.handleBack.bind(this);
	}
	handleType(event) {
		this.setState({ type: event.target.value });
	}
	handleFront(event) {
		this.setState({ front: event.target.value });
	}
	handleBack(event) {
		this.setState({ back: event.target.value });
	}
	addCard(e) {
		let data = {}
		data.collection = 1
		data.user = 1
		data.type = this.state.type
		if (this.state.type == 'tip') {
			data.tip = this.state.front
		} else if (this.state.type == 'challenge' || this.state.type == 'truefalse') {
			data.question = this.state.front;
			data.answer = this.state.back;
		}
		fetch('http://localhost:1234/cards', {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}).then(response => response.json()).then((data) => { console.log(data) })
	}

	render() {
		return (
			<div className="addCard">
				<nav className="titleBar">
					<h1>Add new card</h1>
				</nav>
				<div className="addCard__inputs">
					<label htmlFor="type">Type of card:</label>
					<select id="type" value={this.state.type} onChange={this.handleType}>
						<option value="tip">Tip</option>
						<option value="challenge">Challenge/Response</option>
						<option value="truefalse">True/False</option>
					</select>
					<label htmlFor="front">Question</label>
					<input type="text" value={this.state.front} onChange={this.handleFront}></input>
					<label htmlFor="back">Answer</label>
					<input value={this.state.back} onChange={this.handleBack} id="back" type="text"></input>
					<button type="button" id="add" onClick={this.addCard}>Add new card</button>
				</div>
			</div>
		);
	}
}

export default AddCard;
