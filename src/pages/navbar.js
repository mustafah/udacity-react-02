import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navbar, Button, Nav, Image } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import { logoutAction } from '../actions/login-actions'
import '../index.css'

class NavBar extends Component {
    logout = () => {
        this.props.dispatch(logoutAction())
    }
    render() {
        const { loggedInUser } = this.props
        if(this.props.currentUser === '') {
            return (
                <Redirect to="/login" />
            )
        }

        return (
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Would You ?</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/add">New Question</Link>
                        <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
                    </Nav>
                    <Nav>
                        <div className="navText">{loggedInUser.name}</div>
                        <Image src={loggedInUser.avatarURL} rounded />
                        <Button  onClick={this.logout}>Logout</Button>
                    </Nav>
                </Navbar>
            
        )
    }
}

function mapStateToProps({ currentUser, users } ){
    return {
        loggedInUser: users[currentUser],
        currentUser
    }
}

export default connect(mapStateToProps)(NavBar)