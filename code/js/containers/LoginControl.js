import React, {Component} from 'react';

export default class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button = isLoggedIn
        ? <LogoutButton onClick={this.handleLogoutClick}/>
        :<LoginButton onClick={this.handleLoginClick}/>;

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        );
    }
}

const LoginButton = (props) => (
        <button onClick={props.onClick}>
            Войти
        </button>
    );

const LogoutButton = (props) => (
        <button onClick={props.onClick}>
            Выйти
        </button>
    );

const Greeting = (props) => {
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
        return <UserGreeting/>;
    }

    return <GuestGreeting/>;
};

const UserGreeting = () => (
    <h1>With return!</h1>
);

const GuestGreeting = () => (
    <h1>Sign in, please.</h1>
);