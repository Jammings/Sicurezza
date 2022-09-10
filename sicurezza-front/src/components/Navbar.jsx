import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/auth/auth.actions";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import image from "../assets/user.svg";
import arrow from "../assets/arrow.svg"; //añadir iconos
import icdevice from "../assets/devices.svg";
import icdevice2 from "../assets/devices2.svg"; //añadido icono device2 blanco
import icconfig from "../assets/config.svg";
import icspaces from "../assets/spaces.svg";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  console.log("pathname", location.pathname);

  return (
    true && (
      <div className="navbar">
        <div className="logo"></div>
        {/* {!user && ( // eliminado exclamacion
          <Link className={location.pathname === "/" ? "active" : ""} to="/">
            <img className="activeicons" src={image} alt="inicio" />{" "}
            <span>Home</span>
            <img className="activeicons" src={arrow} alt="fin" />
          </Link>
        )} */} {/**ocultado Home en el login  */}
        {!user && (
          <Link
            className={location.pathname === "/login" ? "active" : ""}
            to="/login"
          >
            Login
            <img className="activeicons" src={arrow} alt="fin" />
          </Link>
        )}{" "}
        {/*si no existe usuario muestra el link de login*/}
        {/* {!user && ( 
          <Link
            className={location.pathname === "/register" ? "active" : ""}
            to="/register"
          >
            Register
            <img className="activeicons" src={arrow} alt="fin" />
          </Link>
        )}{" "} */}{" "}
        {/* ocultado register */}
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
            <img className="activeicons" src={icspaces} alt="inicio" />{" "}
            <span>Espacios</span>
            <img className="activeicons" src={arrow} alt="fin" />
          </Link>
        )}
        {user && (
          <Link
            className={location.pathname === "/devices" ? "active" : ""}
            to="/devices"
          >
            <img className="activeicons" src={icdevice} alt="inicio" /> 
            <img className="activeicons" src={icdevice2} alt="inicio" />{" "} {/** añadir icono blanco icono2*/}
            <span>Dispositivos</span>
            <img className="activeicons" src={arrow} alt="fin" />
          </Link>
        )}
        {user && (
          <Link
            className={location.pathname === "/settings" ? "active" : ""}
            to="/settings"
          >
            <img className="activeicons" src={icconfig} alt="inicio" />{" "}
            <span>Ajustes</span>
            <img className="activeicons" src={arrow} alt="fin" />
          </Link>
        )}
        {user && (
          <Link
            className={location.pathname === "/my-account" ? "active" : ""}
            to="/my-account"
          >
            <span>Mi Cuenta</span>
            <img className="activeicons" src={arrow} alt="fin" />
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
    )
  );

};

export default Navbar;
