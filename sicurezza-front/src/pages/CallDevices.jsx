import axios from "axios";
import { useEffect, useState } from "react";

const CallDevices = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4500/products")
      .then((response) => setDevices(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div>
        {devices.map((device) => (
          <div className="cd-devices">
            <h1> {device.name} </h1>
            <img src={device.img}/>
            <h2>{device.description}</h2>
            <h2>{device.type}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default CallDevices;
