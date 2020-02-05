import React, {Component} from 'react';

class Reservation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isGoing: false,
            numberOfGuests: 0,
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputSubmit = this.handleInputSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        })
    }

    handleInputSubmit(event) {
        const going = this.state.isGoing === true
            ? 'going with ' + this.state.numberOfGuests + ' guests.'
            : 'not going.';
        alert('You are ' + going);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleInputSubmit}>
                <label>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange}/>
                </label>
                <br/>
                <label>
                    Number guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange}/>
                </label>
                <button type="submit">Send</button>
            </form>
        );
    }
}

export default Reservation;