import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import new_In from './pages/new_incidents';
import Profile from './pages/Profile';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/new" component={new_In} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </BrowserRouter>
    );
}