import React, {Component} from 'react';
import './App.css';
import OnlineExam from './Containers/OnlineExam/OnlineExam';
import Toolbar from './Components/Navigation/Toolbar/Toolbar';
import Layout from './Containers/Layout/Layout';
import SignInForm from './Containers/Form/SignInForm/SingInForm';
import SignUpForm from './Containers/Form/SignUpForm/SignUpForm';
import Medical from './Containers/Courses/Medical';
import {Route, Switch} from 'react-router-dom';



class App extends Component{
  render(){
    return(
      <div className='App'>
        <Toolbar/>
        <Layout>
          <Switch>
            <Route path='/sign-in' exact component={SignInForm}/>
            <Route path='/register' exact component={SignUpForm}/>
            <Route path='/login' component={Medical}/>
            <Route path='/' component={OnlineExam}/>
          </Switch>
        </Layout>
      </div>
    )
  }
}

export default App;
