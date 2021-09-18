import React, { useState } from 'react'
import '../styles/Login.css';

const Login = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const formSubmit = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === '12345') {
      props.logged(true);
    } else {
      setError(true);
    }
    
  }

  const usernameChange = (e) => {
    setUsername(e.target.value);
  }

  const passwordChange = (e) => {
    setPassword(e.target.value);
  }

  const closeError = () => {
    setError(false);
  }

  return (
    <div className="login">
      
      <h1>Log In</h1>

      <form className="loginForm" onSubmit={formSubmit}>
        <input type="text" placeholder="Username" onChange={usernameChange} />
        <input type="password" placeholder="Password" onChange={passwordChange} />

        {
          error ?
          <div className="error">
            <p>Username or password is incorrect!</p>
            <p className="timesSign" onClick={closeError}>×</p>
          </div> :
          null
        }

        <button>Log In</button>
      </form>

    </div>
  );
}

export default Login;
