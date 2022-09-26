import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';

const POLLING_INTERVAL = 12000;

const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
};


function App() {

  return (

    <Web3ReactProvider getLibrary={getLibrary}>

    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>

    </Router>
    </Web3ReactProvider>

  );
}

export default App;
