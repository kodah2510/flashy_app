import React from 'react';

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
        
    }

    render() {
        return (
            <div className="ui container" style={{ height : '100vh' }}>
            <div className="ui middle aligned center aligned grid " style={{ height: '100%' }}>
                <div className="eight wide column centered">
                    <h2 className="ui image header">
                        <div className="content">
                            Login to your account
                        </div>
                    </h2>
                    <form className="ui large form">
                        <div className="ui stacked segment">
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="user icon"></i>                                
                                    <input type="text" name="email" placeholder="Email address" onChange={this.handleEmailChange}/>
                                </div>
                            </div>

                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="lock icon"></i>
                                    <input type="password" name="password" placeholder="Password" onChange={this.handlePasswordChange}/>
                                </div>
                            </div>

                            <button className="ui fluid large primary submit button" onClick={this.handleSubmit}>Login</button>

                        </div>
                        <div className="ui error message"></div>
                    </form>
                </div>
            </div>   
            </div>


        )
    }
}

export default LoginForm;