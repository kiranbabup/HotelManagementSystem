import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { usersStore } from '../../App';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loginType, setLoginType] = useState('user'); // Default login type is 'user'
  const navigate = useNavigate();
  const {updateSucces} =usersStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginDataString = localStorage.getItem(`${loginType}LoginData`);
    if (loginDataString) {
      const loginData = JSON.parse(loginDataString);
      if (loginData.email === email && loginData.password === password) {
        setError('');
        console.log('Logged in successfully!');
        setEmail('');
        setPassword('');
        navigate("/");
        updateSucces(true);
      } else {
        setError('Invalid email or password.');
      }
    } else {
      setError(`${loginType === 'user' ? 'User' : 'Hotel'} not registered. Please sign up first.`);
    }
  };

  return (
    <>
      <div className='oyo'>
      <a href='/' >YOYO</a>
      <h5>Hotels and homes across 800 cities, 24+ countries</h5>
    </div>
    <div className="login">
    <div className='material'>
      <h4><strong> There’s a smarter way to YOYO around
Sign up with your phone number</strong> and get exclusive access to discounts and savings on YOYO stays and with our many travel partners</h4>
    </div>
      <div className="login__1">
        <div className='user_switch'>
          <button className={loginType === 'user' ? 'active' : ''} onClick={() => setLoginType('user')}>
            UserLogin
          </button>
          <button className={loginType === 'hotel' ? 'active' : ''} onClick={() => setLoginType('hotel')}>
            HotelLogin
          </button>
        </div>

        <form onSubmit={handleSubmit} className='form'>
          <div className='form__1'>
            <label>Email</label>
            <br />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {loginType === 'hotel' && (
            <div className='form__1'>
              <label htmlFor="hotelName">Hotel Name</label><br />
              <input
                type="text"
                id="hotelName"
                value={password} // Assuming hotel login password is used for hotel name
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          )}

          <div className='form__1'>
            <label htmlFor="password">Password</label><br />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p>{error}</p>}
          <button type="submit">Login</button>
          <p>Don't have an account <a href='/signup'>Signup</a></p>
        </form>
      </div>
    </div>
    </>
  );
};

export default UserLogin;