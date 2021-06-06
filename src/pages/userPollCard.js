import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class UserPollCard extends Component {
    render() {
        return (
            <Card>
                <Card.Img variant="top" src={this.props.questionCreator.avatarURL} />
                <Card.Body>
                    <Card.Title>{ this.props.questionCreator.name  } asks</Card.Title>
                    <Card.Text>
                        Would you rather ?
                    </Card.Text>
                    <Link to={`/questions/${this.props.ques.id}`}><Button >View Poll</Button></Link>
                </Card.Body>
            </Card>
        )
    }
}

function mapStateToProps({ users }, {ques}) {
    return {
        questionCreator: users[ques.author] 
    }
}

export default connect(mapStateToProps)(UserPollCard)