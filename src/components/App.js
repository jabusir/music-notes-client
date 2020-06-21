import React from 'react';
import Header from './Header'
import Home from '../screens/Home';
import Login from '../screens/Login'
import { BrowserRouter as Router, Link, Route, BrowserRouter, Switch } from "react-router-dom";
import Landing from '../screens/Landing';
import NewUserForm from '../screens/NewUser';
import { connect } from 'react-redux';
import PrivateRoute from '../routers/PrivateRoute';


const App = (props) => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact={true} component={Landing} />
                    <Route path="/login" component={Login} />
                    <Route path="/create" component={NewUserForm} />
                    <PrivateRoute path="/home" component={Home}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;