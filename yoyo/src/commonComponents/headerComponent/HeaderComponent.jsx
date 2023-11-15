import './headerComponent.css';
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const HeaderComponent = () => {
    const navigate = useNavigate();

  return (
    <div className="headerComponent">
      <nav>
      <a className='headerLogo' href='/' >YOYO</a>
        <section className='navSection'>
          <article className='forHotelRegistration' onClick={() =>navigate('/login')} >List your property</article>
          <article className='forUserRegistration' onClick={() =>navigate('/login')} ><AccountCircleIcon color="action" fontSize="large" /> Login / SignUp</article>
        </section>
      </nav>
    </div>
  );
}

export default HeaderComponent;
