import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { app, auth } from '../../firebase';

class UserAuthorization extends Component {
  async componentDidMount() {
    const { pathname } = this.props.location;
    // Check if the user is authenticated
    if (pathname === '/admin' || pathname === '/admin/home') {
      // If the user is not authenticated, redirect to the login page
      auth.onAuthStateChanged((user) => {
        if (!user) {
          this.props.history.push('/admin');
        }
      });
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(UserAuthorization);