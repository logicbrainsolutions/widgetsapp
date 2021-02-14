import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import MyError from './Error/Error';
import Header from './Header/Header';
import WidgetForm from './add-widget/WidgetForm';
import Widgets from './widgets/widgets';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="header">
          <h1 className="app-title">
            Widget App
        </h1>
        </div>
        <Switch>
          <Route path="/" exact component={Widgets} />
          <Route path="/add-widget" exact component={WidgetForm} />
          <Route component={MyError} />
        </Switch>
      </div>
    );
   
  }
}

export default App;
