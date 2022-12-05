import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, AppBar, Toolbar, Drawer, Badge, Link, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';



class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            showNotification: false,
            showUserMenu: false,
            toggleDrawer: false,
            anchorEl1: "",
            anchorEl2: ""
        };
        this.onShowNotification = this.onShowNotification.bind(this);
        this.onShowUserMenu = this.onShowUserMenu.bind(this);
        this.onHideNotification = this.onHideNotification.bind(this);
        this.onHideUserMenu = this.onHideUserMenu.bind(this);
        this.onLogoutClick = this.onLogoutClick.bind(this);
    }
}

    const mapStateToProps = (state) => ({
        auth: state.auth
      });
      
      export default connect(mapStateToProps, {logoutUser, checkNotification})(Navbar);