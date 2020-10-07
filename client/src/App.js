import React from 'react'

// libs
import { BrowserRouter as Router, Route } from 'react-router-dom'

// stylesheets
import './App.css'

// components
import Home from './components/pages/Home/Home'
import Vocab from './components/pages/Vocab/Vocab'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route exact path="/" component={Home} />
          <Route path="/vocab" component={Vocab}/>
        </header>
      </div>
    </Router>
  );
}

export default App
