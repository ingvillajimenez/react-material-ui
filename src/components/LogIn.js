import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const formStyles = {
  width: 400,
  margin: '50px auto',
};

class LogIn extends React.Component {
  constructor() {
    super();

    this.state = {
      openComponent: false
    }
  }

  render(){
    return (
      <div style={formStyles}>
        <form onSubmit={ this.login }>
          <TextField
            required
            name="email"
            label="Email"
            fullWidth
            onChange={ this.handleChange }
          />
          <TextField
            required
            name="password"
            type="password"
            label="Password"
            fullWidth
            onChange={ this.handleChange }
          />
          <Button type='submit' variant='contained'>Login</Button>
        {/* <Button type='submit' style={ buttonStyle } variant='contained'>Login</Button> */}
        </form>
      </div>
    );
  }
}

export default LogIn;