import React from 'react';
import { Container, Grid, Header, Image, Icon, Button, Checkbox, Form, Input, Segment} from 'semantic-ui-react';
import './login_form.css';


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

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

    fbLogin(event) {
        console.log("clicked");
        fetch(process.env.REACT_APP_SERVER_URL + '/auth/facebook', {
            method: 'GET',
            mode: 'no-cors',
        }).then(response => {
            console.log(response);
        });
    }

    render() {
        return (
            <Container>
                <Grid columns={2} verticalAlign="middle"  stretched className="height-100">
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
                                        <a style={{ float: 'right'}}>Forgot your password?</a>
                                    </Form.Field>
                                    <Form.Field>
                                        <Button type="submit" fluid>Login</Button>
                                    </Form.Field>
                                    <Form.Field>
                                        <Grid columns={2}>
                                            <Grid.Column>
                                                {/* <a href={process.env.REACT_APP_SERVER_URL + '/auth/facebook/'} className="ui fluid button">
                                                    <Icon name="facebook" />
                                                    <span>Login with Facebook</span>
                                                </a> */}
                                                <Button type="submit" fluid onClick={this.fbLogin}>
                                                    <Icon name="facebook" />
                                                    <span>Login with Facebook</span>
                                                </Button>
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