import React from 'react';
import Header from './Header'
import Login from '../screens/Login'
import { BrowserRouter as Router, Link, Route, BrowserRouter, Switch } from "react-router-dom";
import Landing from '../screens/Landing';
import NewUserForm from '../screens/NewUser';


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact={true} component={Landing} />
                    <Route path="/login" component={Login} />
                    <Route path="/create" component={NewUserForm} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}


export default App;