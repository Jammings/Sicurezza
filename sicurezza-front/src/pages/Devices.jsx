import React from "react";
import Footer from "../components/Footer";
import "./Devices.scss";
import CallDevices from "./CallDevices";

function Devices() {
  return (
    <>
      <div className="d-all">
        <div className="d-text">
          
            <CallDevices />
          
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Devices;
