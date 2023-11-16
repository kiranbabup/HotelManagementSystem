import "./headerComponent.css";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { usersStore } from "../../App";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const { loginSuccess, updateSucces } = usersStore();
  const onLogout = () => {
    updateSucces(false);
    navigate("/");
  };
  return (
    <div className="headerComponent">
      <nav>
        <a className="headerLogo" href="/">
          YOYO
        </a>
        <section className="navSection">
          <article
            className="forHotelRegistration"
            onClick={() => navigate("/login")}
          >
            List your property
          </article>
          {loginSuccess ? (
            <article className="forUserRegistration" onClick={() => onLogout()}>
              Log out
            </article>
          ) : (
            <article
              className="forUserRegistration"
              onClick={() => navigate("/login")}
            ><AccountCircleIcon color="action" fontSize="large" /> Login /SignUp</article>
          )}
        </section>
      </nav>
    </div>
  );
};

export default HeaderComponent;
