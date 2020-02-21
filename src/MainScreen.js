import React, { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import AddCard from './routes/addcard.js'
import { Link } from 'react-router-dom'
import Notifier from 'react-desktop-notification'

function Subject(props) { 
    const handleClick = (event) => {
        //Notifier.start("Coding Tip #1: Format file", "find . -name '*.html' | xargs wc -l | sort");
        //let myNoti = new Notification("Hi there");
    }

    return (
        <Link to={{
            pathname: '/cardscreen'
            }} className="subject" onClick={handleClick} >
            <div className="subject-title">{props.name}</div>
            <div className="num-cards">{props.numCards}</div>
        </Link>
    );
}

class MainScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>This is my main page</p>
        );
    }
}

export default MainScreen;
