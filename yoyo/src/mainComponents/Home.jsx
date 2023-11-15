import HeaderComponent from '../commonComponents/headerComponent/HeaderComponent';
import SignupForm from '../formComponents/loginComponents/userLogin/Signup';
import UserLogin from '../formComponents/loginComponents/userLogin/UserLogin';
import DisplayComponent from './displayComponent/DisplayComponent';
import './home.css';

const Home = () => {
  return (
    <div className="Home">
      <HeaderComponent/>
      <div className='displayField'>
        <DisplayComponent/>
        <UserLogin/>
      </div>
    </div>
  );
}

export default Home;
