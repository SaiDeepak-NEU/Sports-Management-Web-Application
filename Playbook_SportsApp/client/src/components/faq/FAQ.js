import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, useNavigate } from "react-router-dom";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap";
import history from "../history";
import { createBrowserHistory } from "history";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

class FAQ extends Component {
  render() {
    // const { errors } = this.state;

    return (
      <>
        <h2>FAQs</h2>
        <MDBAccordion initialActive={1}>
          <MDBAccordionItem collapseId={1} headerTitle="Can I cancel my membership?">
          Yes, you can cancel the membership at anytime with no cost involved. After you cancel the membership it might take few hours for it to be updated in our database.
          </MDBAccordionItem>
          <MDBAccordionItem collapseId={2} headerTitle="Can I reschedule the booking?">
          You can reschedule your booking only if there are available slots which also includes some fee.
          </MDBAccordionItem>
          <MDBAccordionItem collapseId={3} headerTitle="How to get a refund for cancelled premium membership?">
          Go to My Profile and click on settings then navigate to My Membership. There you will be able to cancel your premium membership if there are no pending payments from your side.
          </MDBAccordionItem>
        </MDBAccordion>

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
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors,
});

export default connect(mapStateToProps)(withRouter(FAQ));
