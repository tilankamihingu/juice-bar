import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
