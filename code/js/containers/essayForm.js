import React, {Component} from 'react';

class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value:'Please, enter your essay...'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value:event.target.value
        });
    }

    handleSubmit(event) {
        alert('Assay sended: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
                    <textarea value={this.state.value} onChange={this.handleChange}/>
                </label>
                <button type='submit'>SEND!!!</button>
            </form>
        )
    }
}

export default EssayForm;