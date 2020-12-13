import React from 'react';
import ContactInfo from './ContactInfo';
import Login from './Login';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
    return (
      <div id="authorization">
        <h1>{this.state.authorized ? "Contact" : "Enter the Password"}</h1>
        {this.state.authorized ? <ContactInfo /> : <Login />}
      </div>
    );
  }
}

export default Contact