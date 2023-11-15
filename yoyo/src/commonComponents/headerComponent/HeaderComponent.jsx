import './headerComponent.css';
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const HeaderComponent = () => {
    const navigate = useNavigate();

  return (
    <div className="headerComponent">
      <nav>
        <h1>YOYO</h1>
        <section className='navSection'>
          <article className='forHotelRegistration' onClick={() =>navigate('/login')} >List your property</article>
          <article className='forUserRegistration' onClick={() =>navigate('/login')} ><AccountCircleIcon color="action" fontSize="large" /> Login / SignUp</article>
        </section>
      </nav>
    </div>
  );
}

export default HeaderComponent;
