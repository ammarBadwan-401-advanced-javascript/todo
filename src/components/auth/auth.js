import React from 'react';
import {LoginContext} from './context';
import Show from './show';

class Auth extends React.Component{



  static contextType = LoginContext;

  render(){
    let okToRender = false;

    try{
      console.log('AUTH ' + this.context.user);
      console.log(this.props.capability);
      console.log(this.context.user.capabilities.includes(this.props.capability));
      okToRender = this.context.loggedIn && (
        this.props.capability ? this.context.user.capabilities.includes(this.props.capability): true)
      console.log('Ok To Render: ' , okToRender);
    } catch (e) {
      console.warn('Not Authorized');
    }


    return (
      <Show condition={okToRender}>
          {this.props.children}
      </Show>
    )
  }
}

export default Auth;