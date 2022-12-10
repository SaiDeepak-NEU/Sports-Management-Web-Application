import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Button, CardActions, TextField } from '@material-ui/core';
import DateFieldGroup from '../common/DateFieldGroup';
import TimeRange from 'react-time-range';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap';
//import ReactTimeslotCalendar from "react-timeslot-calendar";
import moment from "moment";
// import { response } from 'express';

class SlotSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            venues: false,
            book:false,
            errors: {},
            selectedDate: new Date(),
            venueStartTime: parseInt(localStorage.getItem('venue_startTime')),
            venueEndTime: parseInt(localStorage.getItem('venue_endTime')),
            startTime: new Date(),
            endTime: new Date(),
            venueDetails: null,
            selectedEquipment: null
        };

        this.onChange = this.onChange.bind(this);
        this.bookSlot = this.bookSlot.bind(this);
        this.changeTime = this.changeTime.bind(this);
        this.updateEquipment = this.updateEquipment.bind(this);

        let access_token = localStorage.getItem('jwtToken')
        let venue_id = localStorage.getItem('venue_id')
        var requestOptions = {
            method: "GET",
            headers: {
            Authorization: access_token,
            }
        };
        fetch(`http://localhost:8081/api/venues/${venue_id}`, requestOptions)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            this.setState({venueDetails: data})
        });

    }

    onChange(e){
        console.log(e.target.value)
        this.setState({selectedDate: e.target.value})
    }

    bookSlot(e){
        console.log(e)
    }

    changeTime(e){
        console.log(e)
        if(e.startTime)
            this.setState({startTime: e.startTime})
        if(e.endTime)
            this.setState({endTime: e.endTime})
    }

    populateSlots(){
        let slots = []
        for (let i = this.state.venueStartTime; i < this.state.venueEndTime; i++) {
            slots.push(
                <Grid item xs={2}>
                    <Card sx={{ minWidth: 50, maxWidth: 250 }}>
                        <CardContent>
                        <Typography sx={{ fontSize: 15 }} component="div">
                            {i}:00 - {i+1}:00
                        </Typography>
                        <Typography sx={{ fontSize: 12 }} color="green">
                            Available
                        </Typography>
                        </CardContent>
                        <CardActions>
                            {/* <Button size="small" onClick={this.bookSlot} data-startHour="{i}">Book</Button> */}
                        </CardActions>
                    </Card>
                </Grid>
            )
        }

        return slots;
    }

    bookSlot(){ 

        let access_token = localStorage.getItem('jwtToken')

        var requestOptions = {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            Authorization: access_token,
            },
            body: JSON.stringify({
                "venue": this.state.venueDetails._id,
                "venueName": this.state.venueDetails.nameofvenue,
                "sport": this.state.venueDetails.typeofsport,
                "datetime": this.state.selectedDate,
                "startTime": new Date(this.state.startTime).getHours(),
                "endTime": new Date(this.state.endTime).getHours(),
                "equipment": this.state.selectedEquipment
            }),
        };

        fetch('http://localhost:8081/api/bookings/new', requestOptions)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        });
    }

    updateEquipment(e){
        this.setState({selectedEquipment: e.target.value.split(',')})

    }
    
    render() {
        const { errors } = this.state;


        return (
            <div>
                <br></br>
                <h2>Slot selection</h2>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div style={{display: "flex"}}>
                        <h3>{this.state.venueDetails ? this.state.venueDetails.nameofvenue : "Venue"}</h3>
                        <text style={{marginTop: '5px'}}>&nbsp;&nbsp;{this.state.venueDetails ? this.state.venueDetails.typeofsport : "Sport"}</text>
                    </div>
                    <DateFieldGroup
                        label="Select Date"
                        value={this.state.selectedDate}
                        onChange={this.onChange}
                        error={errors.start}
                    />
                </div>
                <br></br>
                <Grid container spacing={2} rowSpacing={5}>
                    {this.populateSlots()}   
                </Grid>
                <br></br>
                <div style={{display: "flex", justifyContent: "center", gap: "20px", color: "black"}}>
                    <div style={{marginTop: '1%'}}>
                        Choose Slot:
                    </div>
                    <TimeRange
                        startMoment={this.state.startTime}
                        endMoment={this.state.endTime}
                        minuteIncrement={60}
                        onChange={this.changeTime}
                    />
                </div>
                <div style={{display: "flex", justifyContent: "center", gap: "20px", color: "black"}}>
                    <div style={{marginTop: '1%'}}>
                        Enter Equipment required:
                    </div>
                    <TextField type="name" onChange={this.updateEquipment}></TextField>
                    <Button onClick={this.bookSlot} variant="contained" size='small'>Book</Button>
                </div>
            </div>
          );
    }

}

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(mapStateToProps)(withRouter(SlotSelection));