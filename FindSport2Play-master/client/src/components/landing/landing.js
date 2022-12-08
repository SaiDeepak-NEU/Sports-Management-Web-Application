import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Button } from '@material-ui/core';
import Carousel from 'react-bootstrap/Carousel';
import bmimage from './badminton.jpg';
import cricimg from './cricket.jpg';
import playoimg from './PlayoSports.jpg'
import './landing.css';


class Landing extends Component {

render() {
    return(
        <div class="container">
        <img src={playoimg} alt="Logo" style= {{width:"100%"}}/>
        <div class="bottom-left">GET YOUR GAME ON!!</div>
        </div>
    )
}


}

const mapStateToProps = (state) => ({
    auth: state.auth
  });
  
  export default connect(mapStateToProps)(Landing);