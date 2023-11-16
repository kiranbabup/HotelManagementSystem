import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './mainComponents/Home';
import UserLogin from './formComponents/loginComponents/UserLogin.jsx';
import SignupForm from './formComponents/signupComponent/Signup.js';
import HotelDetails from './UserLogged/hoteldetails/hoteldetails.js';
import { create } from 'zustand';
import MyBookingsPage from './myBookings/MyBookingsPage.jsx';

export const usersStore = create((set) => ({
  loginSuccess: false,
  updateSucces: (l)=>set(()=>({loginSuccess: l})),
  
}))

function App() {
  const {loginSuccess}=usersStore()
  console.log(loginSuccess)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/hotel/:id" element={<HotelDetails />}></Route>
        <Route path="/myBookings" element={<MyBookingsPage />} />
      </Routes>
    </div>
  );
}

export default App;
