import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Flashcards from './components/Flashcards/Flashcards';

export default(
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/flash-cards/:id" component={Flashcards}></Route>
    </Switch>
)