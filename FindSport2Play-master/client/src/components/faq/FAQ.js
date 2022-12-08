import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, useNavigate } from 'react-router-dom';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap';
import history from '../history';
import { createBrowserHistory } from "history";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class FAQ extends Component {

    render() {
       // const { errors } = this.state;


        return (
            <>
            <h2>FAQs</h2>
            {/* <div style={{ display: 'block', 
                  width: 700, padding: 30 }}>
      <h4>React-Bootstrap Accordion Component</h4>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} 
              variant="link" eventKey="0">
              Click Me to Toggle!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
             Greetings from GeeksforGeeks
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div> */}
    </>
        )

}
}

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(mapStateToProps)(withRouter(FAQ));