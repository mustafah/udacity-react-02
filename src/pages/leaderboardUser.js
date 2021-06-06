import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import '../index.css'

class LeaderboardUser extends Component {
    render() {
        const { user } = this.props
        return (
                <Card>
                    <Card.Img variant="top" src={user.avatarURL} />
                    <Card.Body>
                        <Card.Title>{user.name}</Card.Title>
                            <div className="cell">Answered: {Object.keys(user.answers).length}</div>
                            <div className="cell">Questions: {user.questions.length}</div>
                            <div className="cell">Score: {Object.keys(user.answers).length + user.questions.length}</div>
                    </Card.Body>
                </Card>
        )
    }
}

export default LeaderboardUser