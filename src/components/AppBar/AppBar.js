import React from 'react'
import PropTypes from 'prop-types'
import {Navbar} from 'reactstrap';
import IconStore from '../../ressources/img/store-icon.png';

const AppBar = props => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4"
        >
            <div
                className="row"
                style={{"width": "100%"}}
            >
                <div className="col">
                    <img src={IconStore} style={{
                        "width": "50px",
                        "margin": "2px",
                        "backgroundColor": "white",
                        "padding": "4px",
                        "borderRadius": "10px"
                    }}/>
                    <h3
                        id="header-title"
                        className="text-white"
                        style={{
                        "display": "inline-block",
                        "verticalAlign": "bottom",
                        "paddingLeft": "4px"
                    }}>
                        Welcome to the store
                    </h3>
                </div>
                <div
                    className="col"
                    style={{"textAlign": "right"}}
                >
                    <h6
                        className="text-white"
                        style={{
                        "display": "inline-block",
                        "verticalAlign": "-100%"
                    }}>
                        Number of Articles
                        {/* <span class="badge badge-light">4</span> */}
                    </h6>
                </div>
            </div>
        </nav>
    )
}

AppBar.propTypes = {

};

export default AppBar;
