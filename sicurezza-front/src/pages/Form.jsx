import React, { useState } from "react";
import "./Form.scss";
import { useForm } from "react-hook-form";
import CallDevices from "./CallDevices";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/auth/auth.actions";


const Form = ({rooms, setRooms}) => {
  const { register, handleSubmit } = useForm();
  const user = useSelector(state => state.auth.user);
 const dispatch = useDispatch();
 const onSubmit = async (data) => {
   const roomDb = await axios.post("http://localhost:4500/rooms", data)
   console.log(roomDb.data._id);
   const {password, room, ...restUser} = user
   const updatedUser = { ...restUser, room: [...room, roomDb.data._id] };
   dispatch(updateUser(user._id, updatedUser))
   
  };
  const [devices, setDevices] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:4500/products")
      .then((response) => setDevices(response.data))
      .catch((error) => console.error(error))
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name
        <input type="text" {...register("name")} />
      </label>
      <label>
        Product
        {devices && <select
          type="text"
          {...register("product")}
        > <option></option> 
          {devices.map((device) => (<option value={device._id}>{device.name}</option>))}</select>
         } </label>
      <button>Enviar</button>
    </form>
  );
};

export default Form;
