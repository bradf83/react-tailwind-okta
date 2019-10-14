import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import config from './config/config';
import {ImplicitCallback, SecureRoute, Security} from '@okta/okta-react';
import {AuthHandler, AuthProvider} from "./components/authentication/Auth";
import Navigation from "./components/navigation/Navigation";
import Public from "./components/public/Public";
import Secure from "./components/secure/Secure";

const oktaConfig = { ...config.auth, redirect_uri: window.location.origin + '/implicit/callback'};

function App() {
    return (
            <AuthProvider>
                <Router>
                    <Security {...oktaConfig}>
                        <Navigation/>
                        <Switch>
                            <Route exact={true} path={"/"}>
                                <Public/>
                            </Route>
                            <SecureRoute path={"/secure"} component={Secure}/>
                            <Route path='/implicit/callback' component={ImplicitCallback}/>
                        </Switch>
                        <AuthHandler/>
                    </Security>
                </Router>
            </AuthProvider>
    );
}

export default App;






