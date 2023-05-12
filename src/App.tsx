import { BrowserRouter as Router } from 'react-router-dom'
import React from 'react';
import './index.css';
import Header from "./components/Header/Header";
function App() {
  return (
      <Router>
        <div className={'App'}>
          <Header />
        </div>
      </Router>
  );
}

export default App;
