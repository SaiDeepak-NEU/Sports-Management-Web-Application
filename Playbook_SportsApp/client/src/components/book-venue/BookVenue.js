import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, useNavigate } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Button } from '@material-ui/core';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap';
import history from '../history';
import { createBrowserHistory } from "history";

class BookVenue extends Component {

    

    constructor(props) {
        super(props);
        this.state = {
            displayvenues: false,
            sport_venues:[],
            badminton_venues : [{"name":"Badminton Venue 1","location":"Roxbury","description":"Great place"},{"name":"Badminton Venue 2","location":"Mission Hill","description":"Great place 1"},{"name":"Badminton Venue 3","location":"Jamaica Plain","description":"Great place to play badminton"},{"name":"Badminton Venue 4","location":"Copley","description":"Great place to play badminton"}],
            cricket_venues : ["Cricket Venue 1","Cricket Venue 2","Cricket Venue 3","Cricket Venue 4"],
            book:false,
            errors: {}
        };

       // const navigate = useNavigate();
       const history = createBrowserHistory({forceRefresh:true});

        this.onChooseSport = this.onChooseSport.bind(this)
        this.onBook = this.onBook.bind(this)

        const badminton_venues = ["Badminton Venue 1","Badminton Venue 2","Badminton Venue 3","Badminton Venue 4"];

    }

    onChooseSport(sport) {

        this.setState({
            displayvenues: true
        });

        if(sport == "Badminton"){
            this.setState({
                sport_venues:this.state.badminton_venues
            });
        }

        if(sport == "Cricket"){
            this.setState({
                sport_venues:this.state.cricket_venues
            });
        }

    }

    onBook() {
      //  window.location('/select-slot');
     // navigate('/select-slot');
     history.push('/select-slot');
     window.location.reload();
    }



    render() {
        const { errors } = this.state;
       // const badminton = "Badminton";
       // const cricket = "Cricket";


        return (
            <>
                
                <div className='choose_container' style={{ display: (!this.state.displayvenues) ? 'block' : 'none' }}>
                <h1>Choose Sport</h1>
                    <div className='row' style={{ display: 'flex' }}>

                        <div class="col-sm-6">
                            <div class="sport_card" onClick={() => this.onChooseSport('Badminton')}>
                                <div class="image">
                                    <img src="https://cdn.shopify.com/s/files/1/2183/6715/files/badminton-grass-racket-115016_800x.jpg?v=1613183350" />
                                </div>
                                <div class="card-inner">
                                    <div class="header">
                                        <h2>Badminton</h2>
                                        <h3>Sub-Head</h3>
                                    </div>
                                    <div class="content">
                                        <p>Content area</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <div class="sport_card" onClick={() => this.onChooseSport('Cricket')}>
                                <div class="image">
                                    <img src="https://wallpaperaccess.com/full/6402577.jpg" />
                                </div>
                                <div class="card-inner">
                                    <div class="header">
                                        <h2>Cricket</h2>
                                        <h3>Sub-Head</h3>
                                    </div>
                                    <div class="content">
                                        <p>Content area</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <div class="sport_card">
                                <div class="image">
                                    <img src="https://imageio.forbes.com/specials-images/imageserve//6297a140ad5629573ba5f667/0x0.jpg?format=jpg&width=1200" />
                                </div>
                                <div class="card-inner">
                                    <div class="header">
                                        <h2>Tennis</h2>
                                        <h3>Sub-Head</h3>
                                    </div>
                                    <div class="content">
                                        <p>Content area</p>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>

                    <div className='row' style={{ display: 'flex' }}>

                        <div class="col-sm-4">
                            <div class="sport_card">
                                <div class="image">
                                    <img src="https://www.daysoftheyear.com/wp-content/uploads/world-table-tennis-day1.jpg" />
                                </div>
                                <div class="card-inner">
                                    <div class="header">
                                        <h2>Table Tennis</h2>
                                        <h3>Sub-Head</h3>
                                    </div>
                                    <div class="content">
                                        <p>Content area</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-4">
                            <div class="sport_card">
                                <div class="image">
                                    <img src="https://recreation.gmu.edu/wp-content/uploads/2019/10/basketball.jpg" />
                                </div>
                                <div class="card-inner">
                                    <div class="header">
                                        <h2>Basketball</h2>
                                        <h3>Sub-Head</h3>
                                    </div>
                                    <div class="content">
                                        <p>Content area</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-4">
                            <div class="sport_card">
                                <div class="image">
                                    <img src="https://daily.jstor.org/wp-content/uploads/2018/06/soccer_europe_1050x700.jpg" />
                                </div>
                                <div class="card-inner">
                                    <div class="header">
                                        <h2>Soccer</h2>
                                        <h3>Sub-Head</h3>
                                    </div>
                                    <div class="content">
                                        <p>Content area</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                
                <div className='venues_container' style={{ display: (this.state.displayvenues) ? 'block' : 'none' }}>
                    <h1>Venues</h1>
                    <div className='row'>
                        <div class="col-sm-6">
                        {this.state.sport_venues.map(venue => 
                                            
                                            
                            <div class="card" onClick={this.onChooseSport}>
                                <div style={{display:'flex'}}>
                                <div class="imagev">
                                    <img src="https://cdn.shopify.com/s/files/1/2183/6715/files/badminton-grass-racket-115016_800x.jpg?v=1613183350" />
                                </div>
                                <div class="card-inner">
                                    <div class="header">
                                        <h2>{venue.name}</h2>
                                        <h3>{venue.location}</h3>
                                    </div>
                                    <div class="content">
                                        <p>Content area</p>
                                    </div>
                                    <div>
                                        <button className='btn btn-primary' onClick={this.onBook}>Book</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            )}
                        </div>

                        {/* <div class="col-sm-6">
                            <div class="card">
                            <div style={{display:'flex'}}>
                                <div class="imagev">
                                    <img src="https://wallpaperaccess.com/full/6402577.jpg" />
                                </div>
                                <div class="card-inner">
                                    <div class="header">
                                        <h2>Venue 2</h2>
                                        <h3>Sub-Head</h3>
                                    </div>
                                    <div class="content">
                                        <p>Content area</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <div class="card">
                            <div style={{display:'flex'}}>
                                <div class="imagev">
                                    <img src="https://imageio.forbes.com/specials-images/imageserve//6297a140ad5629573ba5f667/0x0.jpg?format=jpg&width=1200" />
                                </div>
                                <div class="card-inner">
                                    <div class="header">
                                        <h2>Venue 3</h2>
                                        <h3>Sub-Head</h3>
                                    </div>
                                    <div class="content">
                                        <p>Content area</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <div class="card" onClick={this.onChooseSport}>
                            <div style={{display:'flex'}}>
                                <div class="imagev">
                                    <img src="https://cdn.shopify.com/s/files/1/2183/6715/files/badminton-grass-racket-115016_800x.jpg?v=1613183350" />
                                </div>
                                <div class="card-inner">
                                    <div class="header">
                                        <h2>Venue 4</h2>
                                        <h3>Sub-Head</h3>
                                    </div>
                                    <div class="content">
                                        <p>Content area</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <div class="card">
                            <div style={{display:'flex'}}>
                                <div class="imagev">
                                    <img src="https://wallpaperaccess.com/full/6402577.jpg" />
                                </div>
                                <div class="card-inner">
                                    <div class="header">
                                        <h2>Venue 5</h2>
                                        <h3>Sub-Head</h3>
                                    </div>
                                    <div class="content">
                                        <p>Content area</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <div class="card">
                            <div style={{display:'flex'}}>
                                <div class="imagev">
                                    <img src="https://imageio.forbes.com/specials-images/imageserve//6297a140ad5629573ba5f667/0x0.jpg?format=jpg&width=1200" />
                                </div>
                                <div class="card-inner">
                                    <div class="header">
                                        <h2>Venue 6</h2>
                                        <h3>Sub-Head</h3>
                                    </div>
                                    <div class="content">
                                        <p>Content area</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}




                    </div>

                  
                </div>
            </>

        );
    }
}

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});



export default connect(mapStateToProps)(withRouter(BookVenue));