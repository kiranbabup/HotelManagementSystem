import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Signup.css"

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hotelName, setHotelName] = useState(''); // New state for hotel name
  const [hotelAddress, setHotelAddress] = useState(''); // New state for hotel address
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [signupType, setSignupType] = useState('user');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setIsPasswordMatch(false);
      return;
    }

    const loginData = {
      email,
      password,
      hotelName, // Include hotel name in loginData for hotel signup
      hotelAddress, // Include hotel address in loginData for hotel signup
    };

    localStorage.setItem(`${signupType}LoginData`, JSON.stringify(loginData));

    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    // For hotel signup
    if (signupType === 'hotel') {
      console.log('Hotel Name:', hotelName);
      console.log('Hotel Address:', hotelAddress);
    }

    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setHotelName('');
    setHotelAddress('');
    setIsPasswordMatch(true);

    navigate('/login');
  };

  return (
    <>

    <div className='oyo'>
      <a href='/home' >YOYO</a>
      <h5>Hotels and homes across 800 cities, 24+ countries</h5>
    </div>
    <div className='signup'>
    <div className='material'>
      <h4><strong> There’s a smarter way to YOYO around
Sign up with your phone number</strong> and get exclusive access to discounts and savings on YOYO stays and with our many travel partners</h4>
    </div>
      <div className='signup_1'>
        <form onSubmit={handleSubmit} className='form___1'>
    
          <div className='user_switch'>
            <button
              className={signupType === 'user' ? 'active' : ''}
              onClick={() => setSignupType('user')}
            >
              User Signup
            </button>
            <button
              className={signupType === 'hotel' ? 'active' : ''}
              onClick={() => setSignupType('hotel')}
            >
              Hotel Signup
            </button>
          </div>
          <div className='form_1'>
            <label htmlFor='email'>Email</label>
            <br />
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='form_1'>
            <label htmlFor='password'>Password</label>
            <br />
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='form_1'>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <br />
            <input
              type='password'
              id='confirmPassword'
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setIsPasswordMatch(true);
              }}
              required
            />
          </div>

          {/* Additional fields for hotel signup */}
          {signupType === 'hotel' && (
            <>
              <div className='form_1'>
                <label htmlFor='hotelName'>Hotel Name</label>
                <br />
                <input
                  type='text'
                  id='hotelName'
                  value={hotelName}
                  onChange={(e) => setHotelName(e.target.value)}
                  required
                />
              </div>
              <div className='form_1'>
                <label htmlFor='hotelAddress'>Hotel Address</label>
                <br />
                <input
                  type='text'
                  id='hotelAddress'
                  value={hotelAddress}
                  onChange={(e) => setHotelAddress(e.target.value)}
                  required
                />
              </div>
            </>
          )}

          {!isPasswordMatch && <p>Passwords do not match!</p>}
          <button type='submit'>Sign Up</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default SignupForm;
