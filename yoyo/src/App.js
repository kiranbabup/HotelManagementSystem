import './App.css';
import UserLoggedIn from './UserLogged/userLoggedIn';
import { Route, Routes } from "react-router-dom";
import Home from './mainComponents/Home';
import UserLogin from './formComponents/loginComponents/UserLogin.jsx';
import SignupForm from './formComponents/signupComponent/Signup.js';
import HotelDetails from './hoteldetails/hoteldetails.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/ss" element={<UserLoggedIn/>}></Route>
        <Route path="/hotel/:id" element={<HotelDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
