import React, {Component} from 'react';

class Toggle extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false
        };
    }

    handleClick = () => {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick} style={{width: 60+'px'}}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default Toggle;