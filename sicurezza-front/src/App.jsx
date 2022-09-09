import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { checkUser } from "./redux/auth/auth.actions";
import { useNavigate } from "react-router-dom";
// import Scroll from "./components/Scroll";3
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import MyAccount from "./pages/MyAccount";
import AuthRoute from "./components/AuthRoute";
import "./App.scss";
import Start from "./pages/Start";
import Devices from "./pages/Devices";
import Settings from "./pages/Settings";
import Spaces from "./pages/Spaces";

function App() {
  // const [showScroll, setShowScroll] = useState(false);
  const dispatch = useDispatch();
  const [showNavbar, setShowNavbar] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    //Intentar recuperar el usuario, si es que estamos logueados
    dispatch(checkUser()).then((user) => {
      console.log(user, "dispacher");
      // setShowNavbar(!!user); //activar cuando no de error back
      setShowNavbar(true); // borrar despues
      if (!showNavbar) {
        navigate("/login");
      }
    });
  }, []);

  return (
    <div className="app">
      {/*Envía al navbar la función logoutUser que es la que desloguea el usuario, y también el usuario*/}
      {showNavbar && <Navbar />}
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          {/*Envía al componente login la función loginUser, que es la que trata de loguear el usuario con la API, y también el error*/}
          <Route path="/login" element={<Login />} />
          {/*Envía al componente regiter la función registerUser, que es la que trata de registrar el usuario con la API, y también el error*/}
          <Route path="/register" element={<Register />} />
          <Route
            path="/my-account"
            element={<AuthRoute component={<MyAccount />} />}
          />
          <Route path="/start" element={<Start />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/spaces" element={<Spaces />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      {/* <button onClick={() => setShowScroll(!showScroll)}>Mostrar Scroll</button>
      {showScroll && <Scroll />} */}
    </div>
  );
}

export default App;
