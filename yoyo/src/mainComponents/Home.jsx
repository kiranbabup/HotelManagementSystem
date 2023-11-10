import HeaderComponent from '../commonComponents/headerComponent/HeaderComponent';
import DisplayComponent from './displayComponent/DisplayComponent';
import './home.css';

const Home = () => {
  return (
    <div className="Home">
      <HeaderComponent/>
      <div className='displayField'>
        <DisplayComponent/>
      </div>
    </div>
  );
}

export default Home;
