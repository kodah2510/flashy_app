import React from 'react';
import { Container, Grid, Header, Image, Icon, Button, Checkbox, Form, Input, Segment } from 'semantic-ui-react';
import './login_form.css';
import FacebookAuth from 'react-facebook-auth';
// import Dashboard from './dashboard.js';
import { Redirect } from 'react-router';

function FBLoginButton({ onClick }) {
    return (
        <Button type="submit" fluid onClick={onClick}>
            <Icon name="facebook" />
            <span>Login with Facebook</span>
        </Button>
    );
}

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            redirect: false
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.authCallback = this.authCallback.bind(this);
       
    }

    handleEmailChange(event) {
        this.setState({
            email: event.target.value,
        });
    }

    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        // send submit request to server
        this.props.history.push('/dashboard');
    }


    authCallback(response) {
        let myBody = JSON.stringify({
            id: response.id,
            name: response.name,
            email: response.email,
            picture: response.picture
        });

        fetch(process.env.REACT_APP_SERVER_URL + '/auth/facebook', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: myBody
        }).then(function (res) {
            return res.json();
        }).then(json => {
            if (json.status) {
                // logged in
                // console.log(this.props.onLogin);
                this.props.onLogin();
                // console.log(this.props.onLogin.auth);

                this.setState({redirect: true});
            } else {
                // there is something wrong

            }
        });

        // console.log(myBody);

    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />
        }
        return (
            <Container>
                <Grid columns={2} verticalAlign="middle" stretched className="height-100">
                    <Grid.Row centered>
                        <Grid.Column>
                            <Segment textAlign="left">
                                <Header as="h2">Login to Flashy</Header>
                                <Form>
                                    <Form.Field>
                                        <label>Email</label>
                                        <Input icon="mail" iconPosition="left" placeholder="Email" />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Password</label>
                                        <Input icon="lock" iconPosition="left" placeholder="Password" />
                                    </Form.Field>
                                    <Form.Field>
                                        <Checkbox label="Remember Me" />
                                        <a style={{ float: 'right' }}>Forgot your password?</a>
                                    </Form.Field>
                                    <Form.Field>
                                        <Button type="submit" fluid>Login</Button>
                                    </Form.Field>
                                    <Form.Field>
                                        <Grid columns={2}>
                                            <Grid.Column>
                                                <FacebookAuth 
                                                    appId="498712694135009"
                                                    callback={this.authCallback}
                                                    component={FBLoginButton}
                                                />
                                            </Grid.Column>
                                            <Grid.Column>
                                                <Button type="submit" fluid>
                                                    <Icon name="google" />
                                                    <span>Login with Google</span>
                                                </Button>
                                            </Grid.Column>
                                        </Grid>
                                    </Form.Field>
                                </Form>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}

export default LoginForm;