import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/auth/auth.actions";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import image from "../assets/user.svg";


const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  console.log("pathname", location.pathname);
  
  return ( true && ( 
    <div className="navbar">
      <div className="logo">
        
      </div>
      {!user && (
        <Link className={location.pathname === "/" ? "active" : ""} to="/">
          {/* <span>&nbsp;</span> Home */}
          <img src={image} alt="inicio" /> <span>Home</span>
        </Link>
      )}
      {!user && (
        <Link
          className={location.pathname === "/login" ? "active" : ""}
          to="/login"
        >
          Login
        </Link>
      )}{" "}
      {/*si no existe usuario muestra el link de login*/}
      {!user && (
        <Link
          className={location.pathname === "/register" ? "active" : ""}
          to="/register"
        >
          Register
        </Link>
      )}{" "}
      {/*si no existe usuario muestra el link de register*/}
      {user && (
        <Link
          className={location.pathname === "/start" ? "active" : ""}
          to="/start"
        >
          Inicio
        </Link>
      )}
      {user && (
        <Link
          className={location.pathname === "/spaces" ? "active" : ""}
          to="/spaces"
        >
          Espacios
        </Link>
      )}
      {user && (
        <Link
          className={location.pathname === "/devices" ? "active" : ""}
          to="/devices"
        >
          Dispositivos
        </Link>
      )}
      {user && (
        <Link
          className={location.pathname === "/settings" ? "active" : ""}
          to="/settings"
        >
          Ajustes
        </Link>
      )}
      {user && (
        <Link
          className={location.pathname === "/my-account" ? "active" : ""}
          to="/my-account"
        >
          Mi Cuenta
        </Link>
      )}
      {user && (
        <button className="logout" onClick={() => dispatch(logoutUser())}>
          Logout
        </button>
      )}{" "}
      {/*si existe usuario muestra el botton de logout*/}
      {user && <h3>Bienvenido {user.name}</h3>}
    </div>
  ));
};

export default Navbar;
