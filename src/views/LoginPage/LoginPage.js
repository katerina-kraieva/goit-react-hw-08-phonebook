import React, { Component } from 'react';
import { Button, Input, Box, FormLabel, Container } from '@material-ui/core';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <Container maxWidth="md">
        <h1>Login</h1>

        <form onSubmit={this.handleSubmit} autoComplete="off">
          <FormLabel>
            Email
            <Input
              color="secondary"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </FormLabel>

          <FormLabel>
            Password
            <Input
              color="secondary"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </FormLabel>
          <Box m={1}>
            <Button type="submit" variant="outlined" color="secondary">
              Sign In
            </Button>
          </Box>
        </form>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);