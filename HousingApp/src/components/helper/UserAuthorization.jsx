import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { app, auth } from '../../firebase';

class UserAuthorization extends Component {
  async componentDidMount() {
    // Check if the user is authenticated
    await auth.onAuthStateChanged((user) => {
      if (!user) {
        // If the user is not authenticated, redirect to the login page
        this.props.history.push('/admin');
      }
      else {
        this.props.history.push('/admin/home');
      }
    });
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(UserAuthorization);