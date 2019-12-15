import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import allReducers from "./reducers";
import {Provider} from "react-redux";
import WebPage from './components/WebPage';
import LikeButton from './likeButton/like_button';
import Hello from './likeButton/hello';
import Clock from './likeButton/clock';
import ClockRedux from './components/ClockRedux';

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <ClockRedux/>
    </Provider>
    ,
  document.getElementById('fieldToShow')
);
