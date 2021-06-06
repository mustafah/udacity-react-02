import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Col } from "react-bootstrap";
import NavBar from "./navbar";
import LeaderboardUser from "./leaderboardUser";

class Leaderboard extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container>
          <Col xs={6} md={6}>
            {this.props.sortedUsers.map((user) => (
              <LeaderboardUser key={user.id} user={user} />
            ))}
          </Col>
        </Container>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  const sortedUsers = Object.values(users).sort((a, b) => {
    const x1 = Object.keys(a.answers).length + a.questions.length;
    const x2 = Object.keys(b.answers).length + b.questions.length;
    return x2 - x1;
  });
  return {
    sortedUsers,
  };
}

export default connect(mapStateToProps)(Leaderboard);
