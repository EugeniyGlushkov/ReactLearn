import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component {
    render() {
        if (!this.props.car) {
            return (
                <p>Select car...</p>
            )
        }
        return (
            <div>
                <h2>{this.props.car.name}</h2>
                <img src={this.props.car.img} height={'250px'}/>
                <br/>
                <p>{this.props.car.desc}</p>
                <p>Speed: {this.props.car.speed}, weight: {this.props.car.weight}</p>
                <p>ID: {this.props.carId}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        car: state.active.act,
        carId: state.carId.id
    }
}

export default connect (mapStateToProps)(Details);