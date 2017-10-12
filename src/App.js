import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Session-sidebar/Session-sidebar';
import router from './router';


class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        {router}
        <footer />
      </div>
    );
  }
}

export default App;
