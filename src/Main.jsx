import React from 'react'
import App from "./App";
import Home from "./Home";
import { Route, Switch } from "react-router-dom";



function Main() {
    return (
        <>
        <Switch>
            <Route exact path ="/" component={App} />
            <Route exact path ="/home" component={Home} />
            
            </Switch>
        </>
    )
}

export default Main;
