import React from 'react'
import ReactDOM from "react-dom";
import AppContainer from "./components/AppContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import rootStore from "./store/rootStore";

const domContainer = document.querySelector('#app');
const url = new URL(location.href);
const pageType = url.searchParams.get('page');
document.head.getElementsByTagName('title')[0].innerHTML = 'MTM';

ReactDOM.render(
    <Provider store={rootStore}>
        <AppContainer pageType={pageType}/>
    </Provider>, domContainer
);
