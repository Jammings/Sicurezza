import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Form from "./Form";
import image1 from "../assets/greenUsers.svg";
import axios from "axios";





function Spaces() {
  const user = useSelector(state => state.auth.user);
  const [devices, setDevices] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:4500/products")
      .then((response) => setDevices(response.data))
      .catch((error) => console.error(error))
  }, [])
  return (
    <>
      <div>
        <Form/>
        {user.room && user.room.map((room) => { return(<div>{room.name}
        {devices.map((device) => (<option value={device._id}><img width='50px' src={device.img} alt=""></img></option>))}
                    
                    
        </div>)})}
        {console.log(user.room)}
      </div>
    </>
      
  );
}

export default Spaces;