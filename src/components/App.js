import React from 'react';
import Header from './Header'
import Login from './Login'
import { BrowserRouter as Router, Link, Route, BrowserRouter, Switch } from "react-router-dom";
import Landing from '../screens/Landing';


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact={true} component={Landing} />
                    <Route path="/login" component={Login} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}


export default App;