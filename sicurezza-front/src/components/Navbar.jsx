import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/auth/auth.actions";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import icinicio from "../assets/user.svg";
import inicioWhite from "../assets/IconsWhite/userWhite.svg";
import arrow from "../assets/arrow.svg"; //añadir iconos
import icdevice from "../assets/devices.svg";
import whitedevice from "../assets/IconsWhite/devicesWhite.svg"; //añadido icono device2 blanco
import icconfig from "../assets/config.svg";
import whiteconfig from "..//assets/IconsWhite/configWhite.svg";
import icspaces from "../assets/spaces.svg";
import whitespaces from "../assets/IconsWhite/spacesWhite.svg";
import icmessage from "../assets/message.svg";
import whitemessage from "../assets/IconsWhite/messageWhite.svg";

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
        )} */}{" "}
        {/**ocultado Home en el login  */}
        {/* {!user && (
          <Link
            className={location.pathname === "/login" ? "active" : ""}
            to="/login"
          >
            Login
            <img className="activeicons" src={arrow} alt="fin" />
          </Link>
        )}{" "} */}
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
            <img className="activeicons" src={icinicio} alt="inicio" />
            <img className="activeicons" src={inicioWhite} alt="inicio" />{" "}
            <span>Inicio</span>
          </Link>
        )}
        {user && (
          <Link
            className={location.pathname === "/spaces" ? "active" : ""}
            to="/spaces"
          >
            <img className="activeicons" src={icspaces} alt="inicio" />
            <img className="activeicons" src={whitespaces} alt="inicio" />{" "}
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
            <img className="activeicons" src={whitedevice} alt="inicio" />{" "}
            {/** añadir icono blanco icono2*/}
            <span>Dispositivos</span>
            <img className="activeicons" src={arrow} alt="fin" />
          </Link>
        )}
        {user && (
          <Link
            className={location.pathname === "/settings" ? "active" : ""}
            to="/settings"
          >
            <img className="activeicons" src={icconfig} alt="inicio" />
            <img className="activeicons" src={whiteconfig} alt="inicio" />{" "}
            <span>Ajustes</span>
            <img className="activeicons" src={arrow} alt="fin" />
          </Link>
        )}
        {user && (
          <Link
            className={location.pathname === "/my-account" ? "active" : ""}
            to="/my-account"
          >
            <img className="activeicons" src={icmessage} alt="inicio" />
            <img className="activeicons" src={whitemessage} alt="inicio" />{" "}
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
