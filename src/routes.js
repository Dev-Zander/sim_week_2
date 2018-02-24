import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Home from '../src/components/Home'
import Dashboard from '../src/components/Dashboard'
import Step1 from '../src/components/Step1'
import Step2 from '../src/components/Step2'
import Step3 from '../src/components/Step3'
import Step4 from '../src/components/Step4'
import Step5 from '../src/components/Step5'


export default (

    <Switch>
        <Route path='/' component={ Home } exact/>
        <Route path='/Dashboard' component= { Dashboard }/>
        <Route path='/Step1' component={ Step1 }/>
        <Route path='/Step2' component={ Step2}/>
        <Route path='/Step3' component={ Step3}/>
        <Route path='/Step4' component={ Step4}/>
        <Route path='/Step5' component={ Step5}/>
    </Switch>
)