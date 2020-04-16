import React, { Component } from 'react';

import TextField from './TextField';

class CreateAccountPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      name: event.target.name,
    });
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <TextField name="What's your name?" value={name} onChange={this.handleChange} />
        <TextField name="And, your email address" value={name} />
        <TextField name="Create a password" value={name} />
      </div>
    );
  }
}

export default CreateAccountPage;
