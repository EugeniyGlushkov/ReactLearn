import React, {Component} from 'react';
import BoilingVerdict from './boilingVerdict';
import TemperatureInput from './temperatureInput';

class BoilingCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: '', scale: 'c'};
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange(temperature) {
        this.setState({temperature: temperature, scale: 'c'});
    }

    handleFahrenheitChange(temperature) {
        this.setState({temperature: temperature, scale: 'f'});
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
        const temperature = this.state.temperature;
        const celsius = scale === 'c' ? temperature : this.tryConvert(temperature, this.toCelsius);
        const fahrenheit = scale === 'f' ? temperature : this.tryConvert(temperature, this.toFahrenheit);

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