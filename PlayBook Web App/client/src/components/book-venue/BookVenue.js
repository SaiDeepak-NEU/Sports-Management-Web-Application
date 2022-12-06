import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Button } from '@material-ui/core';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap';

class BookVenue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            venues: false,
            errors: {}
        };

        this.onChooseSport = this.onChooseSport.bind(this)

    }

    onChooseSport() {
        this.setState({
            venues: true
        });
    }



    render() {
        const { errors } = this.state;


        return (
            <>
                
                <div className='choose_container' style={{ display: (!this.state.venues) ? 'block' : 'none' }}>
                <h1>Choose Sport</h1>
                    <div className='row' style={{ display: 'flex' }}>
                        <div class="col-sm-6">
                            <div class="sport_card" onClick={this.onChooseSport}>
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
                            <div class="sport_card">
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
                <div className='venues_container' style={{ display: (this.state.venues) ? 'block' : 'none' }}>
                    <h1>Venues</h1>
                    <div className='row'>
                        <div class="col-sm-6">
                            <div class="card" onClick={this.onChooseSport}>
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
                            <div class="card">
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
                            <div class="card">
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

                        <div class="col-sm-6">
                            <div class="card" onClick={this.onChooseSport}>
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
                            <div class="card">
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
                            <div class="card">
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