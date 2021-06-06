import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Card,
  Form,
  Button,
  Col,
  ProgressBar,
  Badge,
} from "react-bootstrap";
import { answerActionCreator } from "../actions/app-actions";
import NavBar from "./navbar";
import "../index.css";

class AnswerQuestion extends Component {
  state = {
    selectedValue: null,
  };
  handleChange = (e) => {
    this.setState({
      selectedValue: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(
      answerActionCreator(
        this.props.currentUser,
        this.props.match.params.id,
        this.state.selectedValue
      )
    );
  };
  render() {
    if (this.props.error) {
      return (
        <Container>
          <Col>
            <h1>404</h1>
            <p>The page not found</p>
          </Col>
        </Container>
      );
    }

    let ques = this.props.q ? this.props.q : "";
    let isOption1Answered = this.props.q
      ? this.props.q.optionOne.votes.includes(this.props.currentUser)
      : null;
    let isOption2Answered = this.props.q
      ? this.props.q.optionTwo.votes.includes(this.props.currentUser)
      : null;
    return (
      <div>
        <NavBar />
        <Container>
          {isOption1Answered === true || isOption2Answered === true ? (
            <Col xs={6} md={6}>
              <Card>
                <Card.Img variant="top" src={this.props.author.avatarURL} />
                <Card.Body>
                  <Card.Title>Asked by {this.props.author.name}</Card.Title>
                  <Card.Text>Results:</Card.Text>
                  <div>
                    <div className="cell">
                      <div>
                        {isOption1Answered ? (
                          <Badge pill variant="warning">
                            Your Vote
                          </Badge>
                        ) : (
                          " "
                        )}
                      </div>
                      Would you rather {ques ? ques.optionOne.text : ""}
                      <ProgressBar
                        now={
                          ques
                            ? (ques.optionOne.votes.length /
                                (ques.optionOne.votes.length +
                                  ques.optionTwo.votes.length)) *
                              100
                            : ""
                        }
                        label={`${
                          ques
                            ? (ques.optionOne.votes.length /
                                (ques.optionOne.votes.length +
                                  ques.optionTwo.votes.length)) *
                              100
                            : ""
                        }%`}
                      />
                      <p>
                        {ques
                          ? `${ques.optionOne.votes.length} out of ${
                              ques.optionTwo.votes.length +
                              ques.optionOne.votes.length
                            }`
                          : " "}
                      </p>
                    </div>
                    <div className="cell">
                      <div>
                        {isOption2Answered ? (
                          <Badge pill variant="warning">
                            Your Vote
                          </Badge>
                        ) : (
                          " "
                        )}
                      </div>
                      Would you rather {ques ? ques.optionTwo.text : ""}
                      <ProgressBar
                        now={
                          ques
                            ? (ques.optionOne.votes.length /
                                (ques.optionOne.votes.length +
                                  ques.optionTwo.votes.length)) *
                              100
                            : ""
                        }
                        label={`${
                          this.props.q
                            ? (ques.optionTwo.votes.length /
                                (ques.optionOne.votes.length +
                                  ques.optionTwo.votes.length)) *
                              100
                            : ""
                        }%`}
                      />
                      <p>
                        {ques
                          ? `${ques.optionTwo.votes.length} out of ${
                              ques.optionTwo.votes.length +
                              ques.optionOne.votes.length
                            }`
                          : " "}
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ) : (
            <Col xs={6} md={6}>
              <Card>
                <Card.Img variant="top" src={this.props.author.avatarURL} />
                <Card.Body>
                  <Card.Title>{this.props.author.name} asks</Card.Title>
                  <Card.Text>Would you rather</Card.Text>
                  <Form.Group>
                    <div className="mb-3">
                      <Form.Check
                        type="radio"
                        name="select"
                        label={ques ? ques.optionOne.text : ""}
                        onChange={this.handleChange}
                        value="optionOne"
                      />

                      <Form.Check
                        type="radio"
                        name="select"
                        label={ques ? ques.optionTwo.text : ""}
                        onChange={this.handleChange}
                        value="optionTwo"
                      />
                    </div>
                  </Form.Group>
                  <Button variant="primary" block onClick={this.onSubmit}>
                    Submit
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Container>
      </div>
    );
  }
}

function mapStateToProps({ users, questions, currentUser }, { match }) {
  let q = questions[match.params.id];
  let author = q ? users[q.author] : "";
  return {
    q: questions[match.params.id],
    author,
    currentUser,
  };
}

export default connect(mapStateToProps)(AnswerQuestion);
