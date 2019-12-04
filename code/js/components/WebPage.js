import React from 'react';
//import '../../css/style';    подключение стилей
import CarsList from '../containers/cars-list';
import Details from '../containers/details';

const WebPage = () => (
    <div>
        <h2>Cars:</h2>
        <CarsList/>
        <hr/>
        <h3>Details:</h3>
        <Details/>
    </div>
);

export default WebPage;