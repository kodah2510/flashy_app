import React, { useState } from 'react'
import './css/CardScreen.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-modal'

function CardScreen(props) {

    const customModalStyle = {
        content: {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)',
            borderRadius          : '10px',
            width: '300px'
        }
    };

    const [modalState, setModalState] = useState({
        isOpen: false
    });

    const showAddTipModal = () => {
        setModalState({
            isOpen: true
        });
    };

    const closeModal = () => {
        setModalState({
            isOpen: false
        });
    };

    const [inputState, setInputState] = useState({
        value: ''
    });

    const [textboxState, setTextboxState] = useState({
        value: ''
    });

    const handleTextboxChange = (event) => {
        setTextboxState({
            value: event.target.value
        });
    };
    
    const handleInputChange = (event) => {
        setInputState({
            value: event.target.value
        });
    };

    const addTip = () => {
        setTipState({
            tips: tipState.tips.concat({
                'title' : inputState.value,
                'content' : textboxState.value
            })
        }); 
        closeModal();
    };
    
    const [tipState, setTipState] = useState({
        tips : [
            
        ]
    });

    return (
        <div className="cardscreen">
            <div className="screen-title">
                <h4>Project Management</h4>
            </div>
            <hr />
            <div className="tips-title">Tips</div>
            <div></div>
            <div className="tip-card">
                <div className="tip-card-header">
                    <p>DSDM Philosophy</p>
                </div>
                <div className="tip-card-content">
                    <p>Best business value emerges when projects are aligned to clear business goals and empowered people</p>
                </div>
            </div>
            <div className="tip-card">
                <div className="tip-card-header">
                    <p>DSDM Principle #1</p>
                </div>
                <div className="tip-card-content">
                    <p>Focus on Business need</p>
                </div>
            </div>
            <div className="tip-card">
                <div className="tip-card-header">
                    <p>DSDM Principle #2</p>
                </div>
                <div className="tip-card-content">
                    <p>Delivery on time</p>
                </div>
            </div>
            <div className="tip-card">
                <div className="tip-card-header">
                    <p>DSDM Principle #3</p>
                </div>
                <div className="tip-card-content">
                    <p>Collaborate</p>
                </div>
            </div>
            {
                tipState.tips.map((tip) => {
                return (
                    <div className="tip-card">
                        <div className="tip-card-header">
                            <p>{tip.title}</p>
                        </div>
                        <div className="tip-card-content">
                            <p>{tip.content}</p>
                        </div>
                    </div>
                ) 
                })
            }
            <div className="add-more-section" onClick={showAddTipModal}>
                <FontAwesomeIcon icon={faPlus}/> Add more tips...
            </div>
            <Modal 
                isOpen={modalState.isOpen}
                onRequestClose={closeModal}
                style={customModalStyle}
                contentLabel="Add Tip Modal"
            >
                <form className="modal-form">
                    <div className="modal-form-group">
                        <input className="custom-textbox" type="text" name="tipTitle" value={inputState.value} onChange={handleInputChange} placeholder="Enter title for the tip"></input>
                        <textarea className="custom-textbox-textarea" type="text"name="tipContent" value={textboxState.value} onChange={handleTextboxChange} placeholder="Enter your content here" rows="5"></textarea>
                    </div>
                    <div className="modal-form-button-group">
                        <input className="custom-button" type="button" value="Create" onClick={addTip}></input>
                        <input className="custom-button" type="button" value="Cancel" onClick={closeModal}></input>
                    </div>
                </form>
            </Modal>
    </div>
    );
}

export default CardScreen;
