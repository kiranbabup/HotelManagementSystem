import FooterComponent from '../commonComponents/footerComponent/FooterComponent';
import HeaderComponent from '../commonComponents/headerComponent/HeaderComponent';
import HomeLandingComponent from './displayComponent/HomeLandingComponent';
import './home.css';

const Home = () => {
  return (
    <div className="Home">
      <HeaderComponent/>
      <div className='displayField'>
        <HomeLandingComponent/>
      </div>
    </div>
  );
}

export default Home;
