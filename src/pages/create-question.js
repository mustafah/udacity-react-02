import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Col, Form } from "react-bootstrap";
import { saveQuestionActionCreator } from "../actions/app-actions";
import NavBar from "./navbar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class CreateQuestion extends Component {
  state = {
    option1: null,
    option2: null,
  };
  onFirstAnswer = (e) => {
    this.setState({
      option1: e.target.value,
    });
  };
  onSecondAnswer = (e) => {
    this.setState({
      option2: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(
      saveQuestionActionCreator(
        this.props.currentUser,
        this.state.option1,
        this.state.option2
      )
    );
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <NavBar />
        <Container>
          <Col xs={6}>
            <Card>
              <Card.Body>
                <Card.Title>Would you Rather...</Card.Title>
                <Form>
                  <Form.Group controlId="users">
                    <Form.Control
                      onChange={this.onFirstAnswer}
                      type="text"
                      placeholder="Option 1"
                    />
                    <span>Or</span>
                    <Form.Control
                      onChange={this.onSecondAnswer}
                      type="text"
                      placeholder="Option 2"
                    />
                  </Form.Group>
                  <Button variant="primary" onClick={this.onSubmit} block>
                    Add
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Container>
      </div>
    );
  }
}

function mapStateToProps({ currentUser }) {
  return {
    currentUser,
  };
}

export default connect(mapStateToProps)(CreateQuestion);
