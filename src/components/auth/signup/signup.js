import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { signUpAction } from '../../../actions';
import { connect } from 'react-redux';

class Signup extends Component {
  submit = (values) => {
    this.props.signUpAction(values);
  }

  errorMessage() {
    if (this.props.errorMessage) {
      return (
        <div className="info-red">
          {this.props.errorMessage}
        </div>
      );
    }
  }

  render () {
    const { handleSubmit } = this.props;
    return (
      <div className="form">
        <div className="container">
          <h2>Sign Up</h2>
          <form onSubmit={ handleSubmit(this.submit) }>
            <Field name="username"
                  component="input"
                  type="text"
                  placeholder="Username"
            />
            <Field name="email"
                  component="input"
                  type="email"
                  placeholder="Email"
            />
            <Field name="password"
                  component="input"
                  type="password"
                  placeholder="Password"
            />
          <button type="submit" className="blue">Sign Up</button>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { erroeMessage: state.auth.error };
}

const reduxFormSignup = reduxForm({
  form: 'signup'
})(Signup);

export default connect(mapStateToProps, {signUpAction})(reduxFormSignup);
// mapStateToProps, {signInAction}
