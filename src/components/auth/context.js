import React from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import axios from 'axios';

const API = process.env.REACT_APP_API || 'https://lab32-401.herokuapp.com';

export const LoginContext = React.createContext();

class LoginProvider extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      loggedIn: false,
      login: this.login,
      logout: this.logout,
      user: {},
    }
  }

  login = (username,password) => {
    axios.post(`${API}/signin`, {},{
        auth: {
            username,
            password
        }
      })
      .then(res =>{
        console.log('LOGIN RESULT');
        console.log(res);
        this.validateToken(res.data.token);
      })
      .catch(e => console.log(e))

    }

  logout = () => {
    this.setLoginState(false, null, {});
  }

  validateToken = token => {
    try{
      let user = jwt.verify(token, process.env.REACT_APP_SECRET || 'supersecret');
      console.log(user);
      this.setLoginState(true, token, user);

    } catch (e){
      this.logout();
      console.log(e)
    }
  }

  setLoginState = (loggedIn, token, user) => {
    cookie.save('auth', token);
    this.setState({token, loggedIn, user});
  }

  componentDidMount() {
    const cookieToken = cookie.load('auth');
    const token = cookieToken || null;
    this.validateToken(token);
  }


  render() {
    return (
      <LoginContext.Provider value={this.state}>
        {this.props.children}
      </LoginContext.Provider>
    )
  }
}


export default LoginProvider;