import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Profile from './pages/Profile';
import newIncident from './pages/new_incidents';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/new" component={newIncident} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </BrowserRouter>
    );
}