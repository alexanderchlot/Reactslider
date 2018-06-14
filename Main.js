import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landingpage from './Landingpage';



const Main = () => (
  <main>
  <Switch>
    <Route exact path="/" component={Landingpage}/>
  </Switch>
  </main>
)

export default Main;
