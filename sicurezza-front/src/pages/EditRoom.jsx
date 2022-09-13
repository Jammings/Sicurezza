import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../api/auth.api";

import { useForm } from "react-hook-form";
import { updateUser } from "../redux/auth/auth.actions";

  
  const EditRoom = () => {
    
    const { register, handleSubmit } = useForm();
    

    const { id } = useParams();
    const user = useSelector(state => state.auth.user);
    const [room, setRoom] = useState({});

    
    const [devices, setDevices] = useState([]);

  useEffect(() => {
    if (!user) return;
    setRoom(user.room.find(room => room._id === id));
  }, [user, id])

  useEffect(() => {
    axios
      .get("http://localhost:4500/products")
      .then((response) => setDevices(response.data))
      .catch((error) => console.error(error));
  }, []);

  const submitRoom = () => {
    axios.put(`${BASE_URL}/rooms/${id}`, variableConLosNuevosDatos)
  };




  return (
    <div>
    <div>
      <h1>Editar room!!</h1>
      <div>Nombre: {room.name}</div>

    </div>

    <form onSubmit={submitRoom}>
        <label>
          <p className="imput-form-text"> Name: </p>
          <input className="form-input-room" type="text" {...register("name")} />
        </label>
        <label>
          <p className="imput-form-text"> Product: </p>
          {devices && (
            <select className="form-input" type="text" {...register("product")}>
              {" "}

              <option></option>
              
              {devices.map((device) => (
                <option key={device._id} value={device._id}>
                  {device.name}
                </option>
              ))}
            </select>
          )}{" "}
        </label>
        <div>
          <button className="btn-product">Enviar</button>
        </div>
      </form>
    </div>
   
   
  )
}

export default EditRoom;