import React from 'react'
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';
import Login from './login'
import Register from './register'
import Home from './Home'

function Pages(){
    return(
        <Router>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/register" exact component={Register}/>
        </Switch>
        </Router>
    );
   
}
export default Pages;