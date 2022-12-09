import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Button } from '@material-ui/core';
import Carousel from 'react-bootstrap/Carousel';
import bmimage from './badminton.jpg';
import cricimg from './cricket.jpg';
import playoimg from './PlayoSports.jpg'
import './landing.css';
import GooglePlayStore from './GooglePlayStore.png';
import AppStore from './AppStore.png';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';


class Landing extends Component {

render() {
    return(<>
        <div class="cntnr">
        <img class="bgimage" src={playoimg} alt="Logo"/>
        <div class="bottom-left">GET YOUR GAME ON!!</div>
        <div class="bottom-center-top">, With The World's Largest Sports Community App</div>
        <img class="bottom-center" src = {GooglePlayStore}/>
        <img class="bottom-cntr" src = {AppStore}/>
        </div>
        <div>
        <MDBCard>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
          <MDBBtn href='#'>Button</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      </div>
      </>
    )
}


}

const mapStateToProps = (state) => ({
    auth: state.auth
  });
  
  export default connect(mapStateToProps)(Landing);