import React, {Component} from "react";

function ListItem(props) {

    return (
        <li>
            {props.val}
        </li>
    );
}

function Ulist() {
    let list = [1, 2, 3, 4, 5];
    const listItems = list.map(num => <ListItem key={num.toString()} val={num}/>);
    return (
        <ul>
            {listItems}
        </ul>
    )
}

export default Ulist;