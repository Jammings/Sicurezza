import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { checkUser } from "./redux/auth/auth.actions";

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

function App() {
  // const [showScroll, setShowScroll] = useState(false);
  const dispatch = useDispatch(); 

  useEffect(() => {
    //Intentar recuperar el usuario, si es que estamos logueados
    dispatch(checkUser());
  }, []);

  return (
    <div className="app">
      {/*Envía al navbar la función logoutUser que es la que desloguea el usuario, y también el usuario*/}
      <Navbar /> 
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          {/*Envía al componente login la función loginUser, que es la que trata de loguear el usuario con la API, y también el error*/}
          <Route path="/login" element={<Login />} />
          {/*Envía al componente regiter la función registerUser, que es la que trata de registrar el usuario con la API, y también el error*/}
          <Route path="/register" element={<Register />} />
          <Route path="/my-account" element={
            <AuthRoute component={<MyAccount />} />}
          />
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