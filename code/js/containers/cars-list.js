import React, {Component} from 'react';
import {bindActionCreators} from "redux"; //для создания действий
import {connect} from 'react-redux';
import {selectCar} from "../actions/index";
import {getCarId} from "../actions/getCarId";

class CarsList extends Component {
    showList() {
        return this.props.cars.map (car => {
            return (
                <li onClick={() => {this.props.getCarId(car); this.props.selectCar(car);}} key={car.id}>{car.name}</li>
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
        cars: state.cars.cars
    };
}

//Функция переводит из функции в свойство
//
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        selectCar: selectCar,
        getCarId: getCarId
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps )(CarsList);