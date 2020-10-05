import React from 'react';

// libs
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/pages/Home/Home';

// stylesheets
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route exact path="/" component={Home} />
        </header>
      </div>
    </Router>
  );
}

export default App;
