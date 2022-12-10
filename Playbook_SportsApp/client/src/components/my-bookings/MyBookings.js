import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

function createData(
  name,
  calories,
  fat,
  carbs,
  protein
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

class MyBookings extends Component {
    constructor(props){
        super(props)
        this.state= {
            bookings: []
        }

        let access_token = localStorage.getItem('jwtToken')
        var requestOptions = {
            method: "GET",
            headers: {Authorization: access_token}
        }

        fetch('http://localhost:8081/api/bookings/', requestOptions)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            this.setState({bookings: data})
        })
    }

    render(){
        return(
            <div>
                <br></br>
                <h2 style={{textAlign: "center"}}>My Bookings</h2>
                <br></br>
                <div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell align="right">Venue</TableCell>
                            <TableCell align="right">Sport</TableCell>
                            <TableCell align="right">Date Booked</TableCell>
                            <TableCell align="right">Time Slot</TableCell>
                            <TableCell align="right">Equipment</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {this.state.bookings.map((booking) => (
                            <TableRow
                            //   key={booking.name}
                            //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell align="left">
                                {booking.venueName}
                            </TableCell>
                            <TableCell align="right">{booking.sport}</TableCell>
                            <TableCell align="right">{new Date(booking.datetime).toDateString()}</TableCell>
                            <TableCell align="right">{booking.startTime}:00 - {booking.endTime}:00</TableCell>
                            <TableCell align="right">{booking.equipment ? booking.equipment.join(', ') : ''}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                </div>
                <br></br><br></br><br></br><br></br>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(mapStateToProps)(withRouter(MyBookings));