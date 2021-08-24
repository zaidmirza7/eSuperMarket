import React from 'react';
import { ProductDetails } from './ProductDetails';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

export const Routerer = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <div>
                        <Route path="/ProductDetails">
                            <ProductDetails/>
                        </Route>
                    </div>
                </Switch>
            </Router>
        </div>
    );
};
