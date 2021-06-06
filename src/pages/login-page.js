import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Col, Form } from 'react-bootstrap'
import * as LoginActions from '../actions/login-actions'
import { AppAuth } from '../auth'
import { Redirect } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import logo from '../assets/logo.png'

class Login extends Component {
    state = {
        userId: null,
        redirectToReferrer: false
    }
    handleChange = (e) => {
        this.setState({
            userId: e.target.value
        })
    }
    login = (e) => {
        e.preventDefault()
        AppAuth.authenticate(() => {
            this.props.dispatch(LoginActions.loginAction(this.state.userId))
            this.setState({redirectToReferrer: true})
        })
    }
    render() {
        const { redirectToReferrer } = this.state
        const { from } = this.props.location.state || { from : { pathname: '/' } }

        if (redirectToReferrer === true) {
            return (
                <Redirect to={from} />
            )
        }
        return (
            <Container>
                <Col xs={6}>
                    <Card>
                        <Card.Header id="logo-container" as="h5">
                            <img src={logo} id="logo" alt="logo"/>
                        </Card.Header>
                        <Card.Body id="login-container">
                            <Card.Title>Sign In to Begin</Card.Title>
                            <Form>
                                <Form.Group controlId="users">
                                    <Form.Control as="select" onChange={this.handleChange}>
                                    <option hidden value="default">Select</option>
                                        {this.props.users.map((id) => (
                                            <option key={id} value={id}>
                                                {id}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                                <Button onClick={this.login}>Sign in</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: Object.keys(state.users)
    }
}

export default connect(mapStateToProps)(Login)