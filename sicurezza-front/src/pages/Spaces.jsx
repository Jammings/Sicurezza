import React from "react";
import Footer from "../components/Footer";
import CallDevices from "./CallDevices";
import "./Spaces.scss";

function Spaces() {
  return (
    <>
      <div className="cd-devices-father">
        <div>
          <CallDevices className="cd-devices" />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Spaces;
