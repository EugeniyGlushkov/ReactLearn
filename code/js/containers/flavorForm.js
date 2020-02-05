import React, {Component} from 'react';

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ['coconut']};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event.target.selectedOptions);
        this.setState({value: Array.from(event.target.selectedOptions, (item) => item.value)});
    }

    handleSubmit(event){
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Choose your favourite:
                    <select multiple={true} value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">grapefruit</option>
                        <option value="lime">lime</option>
                        <option value="coconut">coconut</option>
                        <option value="mango">mango</option>
                    </select>
                </label>
                <input type="submit" value={'submit'}/>
            </form>
        )
    }
}

export default FlavorForm;