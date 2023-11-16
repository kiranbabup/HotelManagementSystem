import './App.css';
import UserLoggedIn from './UserLogged/userLoggedIn';
import { Route, Routes } from "react-router-dom";
import Home from './mainComponents/Home';
import UserLogin from './formComponents/loginComponents/UserLogin.jsx';
import SignupForm from './formComponents/signupComponent/Signup.js';
import HotelDetails from './UserLogged/hoteldetails/hoteldetails.js';
import { create } from 'zustand';

export const usersStore = create((set) => ({
  loginSuccess: false,
  updateSucces: (l)=>set(()=>({loginSuccess: l})),
  searchData: "",
  updateSearchData: (s)=>set(()=>({loginSuccess: s})),
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
        <Route path="/user" element={<UserLoggedIn/>}></Route>
        <Route path="/hotel/:id" element={<HotelDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
