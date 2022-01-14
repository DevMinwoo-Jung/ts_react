import { connect } from 'react-redux';
import React, { Component } from 'react';
import { login, logout } from './actions/user';

class App extends Component {
  onClick = () => {
    this.props.dispatchLogin({
      id: 'minwoo',
      password: 'pw',
    });
  }

  onLogout = () => {
    this.props.dispatchLogout();
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        {
          user.isLogin
          ? <div>Login....</div>
          : user.data
            ? <div>{user.data.nickanme}</div>
            : '로그인 해 주세요'
        }
        {
          !user.data
            ? <button onClick={this.onClick}>로그인</button>
            : <button onClick={this.onLogout}>로그아웃</button>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  posts: state.posts,
}); //reslect??

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin : (data: {id, password }) => dispatch(login(data)),
  dispatchLogout : () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);