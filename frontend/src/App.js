import React from 'react';
import {Route, Switch} from "react-router-dom";
import Main from './Container/Main/Main';
import Details from "./details";

const App = () => {
    return (
        <div className="App">
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/details" component={Details}/>
            </Switch>
        </div>
    );
};

export default App;
