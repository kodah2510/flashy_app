import React, { useState } from 'react';
import Modal from 'react-modal';
import './css/MainScreen.css';
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

function MainScreen(props) {

    const [modalState, setModalState] = useState({
        isOpen: false
    });

    const [subjectState, setSubjectState] = useState({
        subjects : [
            { name: "C++", numCards: 0 },
            { name: "Algorithm", numCards: 0},
            { name: "Project Management", numCards: 4}
        ]
    });

    const showModal = () => {
        setModalState({
            isOpen: true
        })
    };

    const closeModal = () => {
        setModalState({
            isOpen: false
        })
    };

    const addSubject = (event) => {
        setSubjectState({
            subjects: subjectState.subjects.concat({
                name: inputState.value,
                numCards: 0})
            });
        closeModal();
    };

    const customModalStyle = {
        content: {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)',
            borderRadius          : '10px',
            width: '300px',
        }
    };

    const [inputState, setInputState] = useState({
        value: ''
    });
    
    const handleInputChange = (event) => {
        setInputState({value: event.target.value});
    }

    return (
          <div className="main-screen">
              <header className="header-text">Welcome to</header>
              <img className="logo-img" src={process.env.PUBLIC_URL + '/flash.svg'} />
                <h3 className="logo-name">Flashy</h3>
            <hr />
            <div className="subject-section">
                Subjects
            </div>
            {
                subjectState.subjects.map((subject) => {
                   return (<Subject name={subject.name} numCards={subject.numCards} />);
                })
            }
            <div className="add-section" onClick={showModal}>
                <FontAwesomeIcon icon={faPlus}/> Add more subjects...
            </div>
            <Modal 
                isOpen={modalState.isOpen}
                onRequestClose={closeModal}
                style={customModalStyle}
                contentLabel="My Modal"
            >
                <form className="modal-form">
                    <div className="modal-form-group">
                        <input className="custom-textbox" type="text" name="subjectName" value={inputState.value} onChange={handleInputChange} placeholder="Enter your subject name"></input>
                    </div>
                    <div className="modal-form-button-group">
                        <input className="custom-button" type="button" value="Create" onClick={addSubject}></input>
                        <input className="custom-button" type="button" value="Cancel" onClick={closeModal}></input>
                    </div>
                </form>
            </Modal>
            </div>
    );
}

export default MainScreen;
