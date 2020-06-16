import React from 'react';
import Header from './Header'
import Login from './Login'
import { BrowserRouter as Router, Link, Route, BrowserRouter, Switch } from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/login" component={Login} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}


export default App;