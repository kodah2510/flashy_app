import React from 'react';
import { Container, Header, Menu, Grid, Image, Tab, Icon, Dropdown, Segment } from 'semantic-ui-react';
import Courses from './courses.js';
import FlashcardHolder from './flashcards.js';

import './dashboard.css';

const tabPanes = [
    {
        menuItem: 'Flash Cards',
        render: ()  =>  <Tab.Pane attached={false}><FlashcardHolder></FlashcardHolder></Tab.Pane>
    },
    {
        menuItem: 'Overview',
        render: ()  =>  <Tab.Pane attached={false}>Overview</Tab.Pane>
    }
];

function Footer(props) {
    return (
        <div className="footer">Create by <a href="">Khoa Tong</a></div>
    );
}

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    
        this.handleClick = this.handleClick.bind(this);
       
    }

    handleClick(event) {
        console.log('clicked');
    }

    componentDidMount() {
       
    }


    render() {
        return (
            <Container fluid>
                <Menu borderless={true} 
                        size="mini"
                        className="mb-0"
                        fluid
                        >
                    <Menu.Item as="div" className="brandname">
                        <Header as="h2">Flashy</Header>
                    </Menu.Item>
              
                    <Menu.Menu position="right" className="user-info">
                            <Menu.Item as="a">
                                <Image src={process.env.PUBLIC_URL + '/img/random_ava.jpeg'} size="mini" ui={true} rounded={true}/>
                            </Menu.Item>
                            <Menu.Item as="a">
                                John Doe
                            </Menu.Item>
                            
                            <Dropdown item icon="bars" direction="left">
                                <Dropdown.Menu>
                                    <Dropdown.Item>Profile</Dropdown.Item>
                                    <Dropdown.Item>Settings</Dropdown.Item>
                                    <Dropdown.Divider></Dropdown.Divider>
                                    <Dropdown.Item>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                    </Menu.Menu>
                </Menu>
                <Tab menuPosition="left" className="wrapped"
                    panes={tabPanes} 
                    menu={{ vertical: true }} 
                    grid={{ paneWidth: 13, tabWidth: 3 }}/>
                <Footer></Footer>
            </Container>
        );
    }
}

export default Dashboard;
