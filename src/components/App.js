import React, {Component} from 'react'

import Transactions from "../containers/Transactions";

import Filters from "../containers/Filters";
import {Route,Redirect,Switch } from "react-router-dom";
import Transaction from "./Transaction";
import Header from './Header'
import Home from "./Home";
import TransactionDetail from "./TransactionDetail";



const App = () => (
  <div className="container">

      <Switch>

          <Route exact path="/"  component={Home} />
          <Route path='/transaction/:id'  component={TransactionDetail} />
          <Redirect to="/" />

      </Switch>


  </div>
)





export default App
