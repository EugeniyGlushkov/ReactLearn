import React from 'react';

/*const formatName = (pers) => {
    return pers.name + ' ' + pers.surname;
};*/

const maria = {
    name: 'Maria',
    surname: 'Moreana'
};

const hello = (props) =>(
    <h1>Hello, {props.pers}</h1>
);

export default hello;