import { connect } from 'react-redux';
import React, { Component } from 'react';
import { login, logout } from './actions/user';
import { Dispatch } from 'redux';
import { RootState } from './reducers';
import { UserState } from './reducers/user';

interface StateToProps {
  user: UserState,
}

interface DispatchToProps {
  dispatchLogin: ({id, password} : {id: string, password: string}) => void,
  dispatchLogout: () => void;
}

class App extends Component<StateToProps & DispatchToProps> {
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
          user.isLoggiIn
          ? <div>Login....</div>
          : user.data
            ? <div>{user.data.nickname}</div>
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

const mapStateToProps = (state: RootState) => ({
  user: state.user,
  posts: state.posts,
}); //reslect??

const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatchLogin : (data: {id: string, password: string }) => dispatch(login(data)),
  dispatchLogout : () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);