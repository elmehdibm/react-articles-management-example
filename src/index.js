import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

module.hot.accept();
