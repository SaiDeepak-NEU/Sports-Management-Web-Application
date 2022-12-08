import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Button } from '@material-ui/core';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap';
//import ReactTimeslotCalendar from "react-timeslot-calendar";
import moment from "moment";

class SlotSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            venues: false,
            book:false,
            errors: {}
        };

       

    }
    
    render() {
        const { errors } = this.state;


        return (
            <h2>SlotSelection</h2>
          );
    }

}

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(mapStateToProps)(withRouter(SlotSelection));