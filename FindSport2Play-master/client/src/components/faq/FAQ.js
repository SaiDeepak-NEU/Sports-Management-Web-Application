import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, useNavigate } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Button } from '@material-ui/core';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap';
import history from '../history';
import { createBrowserHistory } from "history";

class FAQ extends Component {

    render() {
       // const { errors } = this.state;


        return (
            <h2>FAQs</h2>
        )

}
}

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(mapStateToProps)(withRouter(FAQ));