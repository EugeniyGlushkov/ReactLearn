import React, {Component} from 'react';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value:''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value:event.target.value.toUpperCase()
        });
    }

    handleSubmit(event) {
        alert('Sended name: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input value={this.state.value} onChange={this.handleChange}/>
                </label>
                <button type='submit'>SEND</button>
            </form>
        )
    }
}

export default NameForm;