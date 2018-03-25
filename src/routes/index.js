import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Template from './../containers/Template';
import Inspiration from '../containers/Inspiration';
import Home from './../containers/Home';
import Motivation from './../containers/Motivation';
import Islamic from './../containers/Islamic';
import Positive from './../containers/Positive';
import Credit from './../containers/Credit';
const createRoute = () => {
    return (
        <Route
        path="/"
        component={Template}
        >  
            <IndexRoute
                component={Home}/>
            <Route 
                path={'/1'} 
                component={Inspiration} />
            <Route 
                path={'/2'} 
                component={Positive} />
            <Route 
                path={'/3'} 
                component={Islamic} />
            <Route 
                path={'/4'} 
                component={Motivation} />
             <Route 
                path={'/credit'} 
                component={Credit} />
        </Route>
    );
}

const Routes = createRoute();
export default Routes;