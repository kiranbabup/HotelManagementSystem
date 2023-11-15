import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './mainComponents/Home';
import UserLogin from './formComponents/loginComponents/userLogin/UserLogin';
import SignupForm from './formComponents/loginComponents/userLogin/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </div>
  );
}

export default App;
