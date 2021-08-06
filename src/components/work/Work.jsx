import React from 'react'
import './work.css'
import Sidebar from './workH/Sidebar'
import Tech from './workH/Tech'
import Photo from './workH/Photo'
import {Switch, Route, Redirect} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";


export default function Work() {
    return (
        <Router>
            <Sidebar/>
            <Switch>
                <Route exact component={Tech} path="/Tech"/>
                <Route exact path="/Work"><Redirect to="/Tech"/></Route>
                <Route exact component={Photo} path="/Photo"/>
                    
                
            </Switch>
            
        </Router>
    )
}
