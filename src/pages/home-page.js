import React, { Component } from "react";
import { Col, Container, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import "../index.css";
import NavBar from "./navbar";
import UserPollCard from "./userPollCard";

class Home extends Component {
  state = {
    answeredTab: false,
  };

  openAnsweredTab = () => {
    this.setState({
      answeredTab: true,
    });
  };
  openUnansweredTab = () => {
    this.setState({
      answeredTab: false,
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <Container>
          <Col xs={12} md={6}>
            <Nav justify variant="tabs" defaultActiveKey="link-1">
              <Nav.Item>
                <Nav.Link
                  eventKey="link-1"
                  onClick={this.openUnansweredTab}
                >
                  Unanswered
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2" onClick={this.openAnsweredTab}>
                  Answered
                </Nav.Link>
              </Nav.Item>
            </Nav>
            {this.state.answeredTab === false
              ? this.props.unAnsweredQuestions.map((q) => (
                  <UserPollCard key={q.id} ques={q} />
                ))
              : this.props.answeredQuestions.map((q) => (
                  <UserPollCard key={q.id} ques={q} />
                ))}
          </Col>
        </Container>
      </div>
    );
  }
}
function mapStateToProps({ users, questions, currentUser }) {
  let allQuestions = Object.values(questions);
  let loggedInUser = users[currentUser];
  let loggedInAnswers = loggedInUser ? Object.keys(loggedInUser.answers) : [];
  return {
    answeredQuestions: allQuestions
      .filter((question) => loggedInAnswers.includes(question.id))
      .sort((a, b) => b.timestamp - a.timestamp),
    unAnsweredQuestions: allQuestions
      .filter((question) => !loggedInAnswers.includes(question.id))
      .sort((a, b) => b.timestamp - a.timestamp),
  };
}
export default connect(mapStateToProps)(Home);
