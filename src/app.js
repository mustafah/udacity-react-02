import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { initializeAppAction } from './actions/app-actions'
import AppRoute from './auth/app-route'
import NotFound from './pages/404-page'
import Home from './pages/home-page'
import Leaderboard from './pages/leaderBoard-page'
import Login from './pages/login-page'
import CreateQuestion from './pages/create-question'
import AnswerQuestion from './pages/answer-question'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(initializeAppAction())
  }

  render() {
    return (
      <div className="App"> 
        <Router>
              <AppRoute path="/" exact component={ Home }/> 
              <AppRoute path="/add" component={ CreateQuestion }/>
              <AppRoute path="/leaderboard" component={ Leaderboard }/>
              <Route path="/login" exact component={ Login }/>
              <AppRoute path="/404-page" component={NotFound}/>
              <AppRoute path="/questions/:id" component={ AnswerQuestion }/>
        </Router>
      </div>
    )
  }
}

export default connect()(App)
