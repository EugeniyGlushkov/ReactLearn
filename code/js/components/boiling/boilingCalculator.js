import React, {Component} from 'react';
import BoilingVerdict from './boilingVerdict';
import TemperatureInput from './temperatureInput';

class BoilingCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {celsius: '', fahrenheit: ''};
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange(temperature) {
        const fahrenheit = this.tryConvert(temperature, this.toFahrenheit)
        this.setState({celsius: temperature, fahrenheit: fahrenheit});
    }

    handleFahrenheitChange(temperature) {
        const celsius = this.tryConvert(temperature, this.toCelsius)
        this.setState({celsius: celsius, fahrenheit: temperature});
    }

    toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    tryConvert(temperature, convert) {
        const input = parseFloat(temperature);

        if (Number.isNaN(input)) {
            return '';
        }

        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    render() {
        const scale = this.state.scale;
        const celsius = this.state.celsius;
        const fahrenheit = this.state.fahrenheit;

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}/>
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}/>
                <BoilingVerdict
                    celsius={parseFloat(celsius)}/>
            </div>
        )
    }
}

export default BoilingCalculator;