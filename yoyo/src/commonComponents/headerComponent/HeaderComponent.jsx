import './headerComponent.css';
// import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
    // const navigate = useNavigate();

  return (
    <div className="headerComponent">
      <nav>
        <h1>YOYO</h1>
        <section className='navSection'>
          <article className='forOwnerRegistration'>List your property</article>
          <article className='forUserRegistration'>Login/SignUp</article>
        </section>
      </nav>
    </div>
  );
}

export default HeaderComponent;
