import React, { useState } from 'react'
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {

  const [login, setLogin] = useState(false);

  const logged = (val) => {

    setLogin(val);

  }

  return (
    <div className="app">

      {
        login ? 
        <Dashboard /> :
        <Login logged={logged} />
      }

    </div>
  );
}

export default App;
