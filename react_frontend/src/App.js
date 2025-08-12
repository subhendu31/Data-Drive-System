
import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import Drive from './Drive';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(() => {
    const u = localStorage.getItem('user');
    return u ? JSON.parse(u) : null;
  });
  const [showLogin, setShowLogin] = useState(true);

  const handleSetToken = (t) => {
    setToken(t);
    localStorage.setItem('token', t);
  };
  const handleSetUser = (u) => {
    setUser(u);
    localStorage.setItem('user', JSON.stringify(u));
  };
  const handleLogout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <div className="App">
      {!token ? (
        <div className="auth-container">
          {showLogin ? (
            <>
              <Login setToken={handleSetToken} setUser={handleSetUser} />
              <p>Don't have an account? <button onClick={() => setShowLogin(false)}>Register</button></p>
            </>
          ) : (
            <>
              <Register setShowLogin={setShowLogin} />
              <p>Already have an account? <button onClick={() => setShowLogin(true)}>Login</button></p>
            </>
          )}
        </div>
      ) : (
        <>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
          <Drive token={token} user={user} />
        </>
      )}
    </div>
  );
}

export default App;
