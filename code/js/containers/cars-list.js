import React, {Component} from 'react';
import {bindActionCreators} from "redux"; //для создания действий
import {connect} from 'react-redux';

class CarsList extends Component {
    showList() {
        return this.props.cars.map (car => {
            return (
                <li key={car.id}>{car.name}</li>
            )
        })
    }

    render() {
        return (
            <ol>
                {this.showList()}
            </ol>
        );
    }
}

//Берёт состояние из какого-либо стэйта и вставляет их в компонент в качестве свойств
function mapStateToProps(state) {
    return {
        cars: state.cars
    }
}

export default connect(mapStateToProps)(CarsList);