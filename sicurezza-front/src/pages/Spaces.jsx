import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Form from "./Form";
import axios from "axios";
import "./Spaces.scss"

function Spaces() {
  const user = useSelector((state) => state.auth.user);
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4500/products")
      .then((response) => setDevices(response.data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <div className="room-form">
        <Form />
        {user && user.room && user.room.length > 0 &&
          user.room.map((room) => {
            return (
              <div className="products-room">
                {room && room.name}
                {room.product && room.product.length > 0 && room.product.map((product) => (
                  <img width="150px" src={product.img} alt=""></img>
                ))}
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Spaces;
