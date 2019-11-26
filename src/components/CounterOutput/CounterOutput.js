import React from 'react';
import { Route } from 'react-router-dom';
import './CounterOutput.css';
import dashboard from './dashboard'

const counterOutput = (props) => (
    <div className="CounterOutput">
        Current Counter: {props.value}
        <Route exact path="/dashboard" exact  component={dashboard} />
    </div>
);

export default counterOutput;