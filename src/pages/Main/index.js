import React, { Component } from 'react';

import api from '../../services/api';

import './styles.css';
import logo from '../../assets/logo.jpg';
import { setTimeout } from 'timers';
import { async } from 'q';

export default class Main extends Component {
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
