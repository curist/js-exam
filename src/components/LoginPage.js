import React from 'react';
import { Input, Button } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { submitPassword } from '../actions/login';
import './LoginPage.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.actions = this.props.actions;
    this.submitPassword = this.actions.submitPassword;
    this.login = this.login.bind(this);
    this.state = { password: '', error: '' };
  }
  componentDidUpdate() {
    if (this.props.isLogin) {
      this.props.history.push('/js-exam');
    }
  }

  login(e) {
    e.preventDefault();
    this.submitPassword(this.state.password);
  }

  render() {
    return (
      <div className="login">
        <form onSubmit={this.login}>
          <div style={{display:'flex'}}>
            <Input
              placeholder="input the password to login"
              onChange={e => this.setState({ password: e.target.value })}
              style={{ width: 200, marginRight: 5 }}
              />
            <Button type="primary" htmlType="submit">Login</Button>
          </div>
        </form>
        <div className="error">{ this.state.error }</div>
      </div>
    )
  }
}

export default withRouter(connect(
  state => {
    return {
      isLogin: state.login.isLogin
    };
  },
  dispatch => {
    return {
      actions: {
        submitPassword: (password) => dispatch(submitPassword(password))
      }
    };
  }
)(LoginPage));
