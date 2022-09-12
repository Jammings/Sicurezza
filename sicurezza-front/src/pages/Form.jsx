import React from "react";
import './Form.scss';
// rfce -> Crear componentes
import { useForm } from 'react-hook-form';

const Form = () => {
    const {register, handleSubmit } = useForm();
    
    const onSubmit = (data) => {
        console.log(data)
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name
        <input type="text" {...register("name")} />
        </label>
        <label>Product
        <select type="text" {...register("product")}></select>
        </label>
        <button>Enviar</button>
    </form>
  )
}

export default Form