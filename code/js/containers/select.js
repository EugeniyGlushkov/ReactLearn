import React, {Component} from 'react';

class Select extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: props.items,
            value: props.default
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    Option(props) {
        return (
            <option value={props.item}>{props.item}</option>
        )
    }

    render() {
        const options = this.state.items.map(item => <Option item={item}/>);
        return(
            <select value={this.state.default} onChange={this.handleChange}>
                {options}
            </select>
        )
    }
}

export default Select;