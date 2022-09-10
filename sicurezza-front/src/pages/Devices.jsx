import React from "react";
import Footer from "../components/Footer";
import image1 from "../assets/addDevice.svg";
import image from "../assets/deleteDevice.svg";
import image2 from "../assets/bigSpaces.svg";
import image3 from "../assets/configDevice.svg";
import image4 from "../assets/lightGreen.png";
import image5 from "../assets/camera.png";
import "./Devices.scss";

function Devices() {
  return (
    <>
      <div className="d-all">
        <div className="d-bocadillo">
          <div>
            <div className="d-img">
              <img src={image2} alt="Spaces" />
            </div>
            <div className="d-spaces">
              <h2> Espacio </h2>
              <h3> Salón</h3>
              {/* <h2> {user.dispositivos} </h2>  */}
              {/* ESTO ESTÁ MAL, LO DEJO ASÍ PARA CAMBIARLO CUANDO ESTÉ EL BACK */}
            </div>
          </div>
          <div className="d-add">
            <img src={image1} alt="add" />
            <h2> Agregar Dispositivo </h2>
          </div>
          <div className="d-delete">
            <img src={image} alt="delete" />
            <h2> Eliminar Dispositivo </h2>
          </div>
          <div className="d-config">
            <img src={image3} alt="config" />
            <h2> Editar Dispositivo </h2>
          </div>
        </div>
        <div className="d-text">
          <div className="d-title">
            <h2> DISPOSITIVOS CONECTADOS </h2>
          </div>
          <div className="d-devices-father">
            <div className="d-light">
              <img src={image4} alt="light on" />
              <h2>BOMBILLA</h2>
            </div>
            <div className="d-light">
              <img src={image5} alt="light off" />
              <h2>CCTV</h2>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Devices;
