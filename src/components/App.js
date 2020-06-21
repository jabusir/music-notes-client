import React, { useEffect } from 'react';
import Header from './Header'
import Home from '../screens/Home';
import Login from '../screens/Login'
import { BrowserRouter as Router, Link, Route, BrowserRouter, Switch } from "react-router-dom";
import Landing from '../screens/Landing';
import NewUserForm from '../screens/NewUser';
import { connect } from 'react-redux';
import PrivateRoute from '../routers/PrivateRoute';
import Profile from '../screens/Profile';
import { setToken } from "../actions/token";


const App = (props) => {

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("tokens"))
        props.dispatch(setToken(token))
    })

    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact={true} component={Landing} />
                    <Route path="/login" component={Login} />
                    <Route path="/create" component={NewUserForm} />
                    <PrivateRoute path="/home" component={Home}/>
                    <PrivateRoute path="/me" component={Profile} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default connect()(App);