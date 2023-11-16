import HeaderComponent from '../commonComponents/headerComponent/HeaderComponent';
import HomeLandingComponent from './displayComponent/HomeLandingComponent';
import FooterComponent from '../commonComponents/footerComponent/FooterComponent';
import './home.css';

const Home = () => {
  return (
    <div className="Home">
      <HeaderComponent/>
      {/* <div className='HomeLandingComponent'> */}
        <HomeLandingComponent/>
      {/* </div> */}
      <FooterComponent/>
    </div>
  );
}

export default Home;