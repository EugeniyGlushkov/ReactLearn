import React, {Component} from "react";
import {getCurrentTime} from "../actions/clock";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import Toggle from '../containers/Toggle';

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
                <h1>Hello, World!!!</h1>
                <h2>It is {this.props.time}</h2>
                <Toggle/>
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