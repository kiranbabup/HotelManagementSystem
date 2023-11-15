import './FooterComponent.css';
import { useNavigate } from "react-router-dom";

const FooterComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="FooterComponent">

      <div className='footerTop'>
        <div className='footer_t-left'>
        <a className='footerLogo' href='/' >YOYO</a>
          <p>World's leading chain of hotels and homes</p>
        </div>
        <div className='footer_t-right'>
          <p>Join our network and grow your business!</p>
          <article className='footerHotelLogin' onClick={() =>navigate('/login')} >List your property</article>
        </div>
      </div>
      
      <hr/>
      <div className='footerDown'>
        <aside>About Us</aside>
        <aside>Terms and conditions</aside>
        <aside>Support</aside>
        <aside>Privacy Policy</aside>
        <aside>Trust And Safety</aside>
      </div>
    </div>
  );
}

export default FooterComponent;
