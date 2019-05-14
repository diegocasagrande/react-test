import React, { Component } from 'react';

import api from '../../services/api';

import './styles.css';
import logo from '../../assets/logo.jpg';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as LoginActions from '../../store/actions/login';

class Main extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    console.log(props.payload);
  }

  state = {
    user: '',
    password: '',
  };

  handleSubmit = async e => {
    e.preventDefault();
    console.log('------------------------', this.state.user, this.state.password);

    const response = await api.get(`/v1/user/${this.state.user}`);
    console.log(response);

    if (response.status === 200) {
      console.log('LOGOU');
      this.props.loginSuccess('diego', '123');

      this.props.history.push('/app');
    } else {
      console.log('NAO LOGOU');
    }
  };

  handleChangeUser = e => {
    this.setState({ user: e.target.value });
  };
  handleChangePass = e => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <div id="main-login">
        <form onSubmit={this.handleSubmit}>
          <img src={logo} alt="Prime Clínica Médica" />
          <input placeholder="Usuário" value={this.state.user} onChange={this.handleChangeUser} />
          <input type="password" value={this.state.password} onChange={this.handleChangePass} />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login.payload,
});

const mapDispatchToProps = dispatch => {
  bindActionCreators(LoginActions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
