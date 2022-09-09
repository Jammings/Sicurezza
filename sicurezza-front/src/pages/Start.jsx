import React from "react";
import { useDispatch, useSelector } from "react-redux";
import image1 from "../assets/greenUsers.svg";
import image from "../assets/checkUsers.svg";
import image2 from "../assets/bigSpaces.svg";
import image3 from "../assets/lightOn.png";
import image4 from "../assets/lightOff.png";
import "./Start.scss";

const Start = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <div className="b-bocadillo">
        <div className="b-img">
          <img src={image1} />
        </div>
        <div className="b.bocadillitos">
          <h2> Otros Dispositivos </h2>
          <h3> 5</h3>
          {/* <h2> {user.dispositivos} </h2>  */}
          {/* ESTO ESTÁ MAL, LO DEJO ASÍ PARA CAMBIARLO CUANDO ESTÉ EL BACK */}
        </div>
        <div className="b-bocadillitos">
          <h2> Conectado </h2>
          <img src={image} />
        </div>
        <div className="b-img">
          <img src={image2} />
        </div>
        <div className="b.bocadillitos">
          <h2> Espacio </h2>
          <h3> Salón</h3>
          {/* <h2> {user.dispositivos} </h2>  */}
          {/* ESTO ESTÁ MAL, LO DEJO ASÍ PARA CAMBIARLO CUANDO ESTÉ EL BACK */}
        </div>
      </div>
      <div className="b-text">
        <div className="b-titulo">
          <h2> Bienvenido {user.name} 👋​ </h2>
        </div>
        <div classname="b-encendido-padre">
          <div className="b-encendido">
            <img src={image3} />
            <h2>ENCENDER</h2>
          </div>
          <div className="b-apagado">
            <img src={image4} />
            <h2>APAGAR</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
