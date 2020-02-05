import React, {Component} from "react";
import {getCurrentTime} from "../actions/clock";
import {bindActionCreators} from "redux";
import {connect, Provider} from 'react-redux';
import Toggle from '../containers/Toggle';
import LoginControl from '../containers/LoginControl';
import UnoderedList from '../containers/UList';
import NameForm from '../containers/nameForm';
import EssayForm from '../containers/essayForm';
import FlavorForm from '../containers/flavorForm';
import Reservation from '../containers/reservation';
import BoilingCalculator from './boiling/boilingCalculator';

class ClockRedux extends Component {
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(),
            1000);
    }

    tick() {
        this.props.getCurrentTime((new Date()).toLocaleTimeString());
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                <LoginControl/>
                <br/>
                <h1>Hello, World!!!</h1>
                <h2>It is {this.props.time}</h2>
                <Toggle/>
                <UnoderedList/>
                <FlavorForm/>
                <Reservation/>
                <BoilingCalculator/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        time: state.currentTime.date
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        getCurrentTime: getCurrentTime
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ClockRedux);