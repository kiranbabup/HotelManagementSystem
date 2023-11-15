import HeaderComponent from '../commonComponents/headerComponent/HeaderComponent';
import Displaycomponent from './displayComponent/Displaycomponent';
import './home.css';

const Home = () => {
  return (
    <div className="Home">
      <HeaderComponent/>
      <div className='displayField'>
        <Displaycomponent/>
      </div>
    </div>
  );
}

export default Home;
