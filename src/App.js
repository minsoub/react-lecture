import React, { Component, Fragment } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import NavBar from './components/NavBar';
import Products from './components/Products';
import Posts from './components/Posts';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import ColorView from './components/colorview';
import ReduceTest from './components/reduce_test';
import AxiosTest from './components/axios_test';

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <div className="content">
        <Switch>
          <Route path="/products/:id" render={(props) => <Products sortBy="newest" {...props} />} component={Products} />
          <Route path="/posts/:year?/:month?" 
            render={(props) => <Posts sortBy="newset" approved="true" {...props}/>} component={Posts} />
          <Route path="/admin" component={Dashboard} />
          <Route path={['/about', '/info']} component={About} />
          <Route exact path="/" component={Home} />
          <Route exact path="/color" component={ColorView} />
          <Route exact path="/reduce" component={ReduceTest} />
          <Route exact path="/axios" component={AxiosTest} />
          <Redirect from="/message" to="/posts" />
          <Route component={NotFound} />          
        </Switch>
      </div>
    </Fragment>
  );
};

export default App;
