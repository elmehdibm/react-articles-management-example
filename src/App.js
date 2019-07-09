import React, { Component } from 'react'
import AppBar from './components/AppBar/AppBar';
import ListItemContainer from './containers/ListItemContainer';

export default class App extends Component {
    render() {
        return (
            <div>
                <AppBar />
                <ListItemContainer />
            </div>
        )
    }
}
