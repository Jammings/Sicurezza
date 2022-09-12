import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Form from "./Form";



function Spaces() {
  const user = useSelector(state => state.auth.user);
    
  return (
    <>
      <div>
        <Form/>
        {user.room && user.room.map((room) => { return(<div>{room.name}</div>)})}
        {console.log(user.room)}
      </div>
    </>
      
  );
}

export default Spaces;