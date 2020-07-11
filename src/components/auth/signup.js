import React from 'react';
import Show from './show';
import { LoginContext } from './context';

class Signup extends React.Component{
  static contextType = LoginContext;

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      role: 'user',
      email: '',
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name] : e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('context is');
    console.log(this.context)
    this.context.signup(this.state.username, this.state.password,this.state.role, this.state.email);
  }


  render(){
    return(
    <Show condition={!this.context.loggedIn}>
      <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Sign up</legend>
            <input placeholder="New Username" name="username" onChange={this.handleChange}/> <br/>
            <input placeholder="Password" name="password" type="password" onChange={this.handleChange}/><br/>
            <input placeholder="Email" name="email" onChange={this.handleChange}/><br/>
            <select onChange={this.handleChange} name="role">
                <option value="user" >User</option>
                <option value="admin" >Admin</option>
                <option value="editors" >Editor</option>
            </select>
          </fieldset>
          <button>Submit</button>
      </form>
    </Show>
    )
  }
}

export default Signup;