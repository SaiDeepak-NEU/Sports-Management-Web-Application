import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Container, Grid, Link, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

import Logo from '../../img/logop.png';
import './Footer.css';

export default() => {
    return(
        <footer>
            <AppBar className="primary-color marginT-3 pad-2" position="static">
                <Grid component={Container} container>
                    <Grid item xs={12} sm={3}>
                        <img src={Logo} className="logo" alt="Logo" />
                    </Grid>
                    <Grid item xs={12} sm={9} className="footer-links">
                        <Link className="white-link" component={RouterLink} to="/">
                            Home
                        </Link>
                        <span>/</span>
                        <Link className="white-link" component={RouterLink} to="/events">
                            Events List
                        </Link>
                        <span>/</span>
                        <Link className="white-link" component={RouterLink} to="/create-event">
                            Create Event
                        </Link>
                        <span>/</span>
                        <Link className="white-link" component={RouterLink} to="/book-venue">
                            Book Venue
                        </Link>
                        <span>/</span>
                        <Link className="white-link" component={RouterLink} to="/register">
                            Get Started
                        </Link>
                        <span>/</span>
                        <Link className="white-link" component={RouterLink} to="/termsofservice">
                            Terms
                        </Link>
                        <span>/</span>
                        <Link className="white-link" component={RouterLink} to="/privacypolicy">
                            Privacy
                        </Link>
                    </Grid>
                    <div className='social-container'>
                    <a href="#" className="youtube social"><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
                    <a href="#" className="facebook social"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                    <a href="#" className="twitter social"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                    <a href="#" className="instagram social"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                    </div>
                    <Grid item xs={12} sm={3}></Grid>
                    <Grid item xs={12} sm={9}>
                        <Typography className="marginL-d7">
                            Copyright &copy;{new Date().getFullYear()} PlayBook
                        </Typography>
                    </Grid>
                </Grid>
            </AppBar>
        </footer>
    );
};