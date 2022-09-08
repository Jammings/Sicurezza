import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../redux/auth/auth.actions";

const INITIAL_STATE = {
  email: "",
  name: "",
  password: "",
};

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {error} = useSelector(state => state.auth);
  const [form, setForm] = useState(INITIAL_STATE);

  const submit = (ev) => {
    ev.preventDefault();
    dispatch(registerUser(form, navigate))
  };

  const changeInput = (ev) => {
    const { name, value } = ev.target;

    if(value) ev.target.setCustomValidity('');

    setForm({
      ...form,
      [name]: value,
    });
  };

  const setCustomMessage = (ev) => {
    ev.target.setCustomValidity('Debes completar este campo, no seas tramposo');
  }

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={submit}>
        <label>
          <p>Nombre</p>
          <input type="text" name="name" value={form.name} onChange={changeInput} onInvalid={(ev) => setCustomMessage(ev)} required/>
        </label>
        <label>
          <p>Email</p>
          <input type="email" name="email" value={form.email} onChange={changeInput} required />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={changeInput}
            required
            pattern="(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}"
            title="La contraseña no cumple las reglas. 8 carácteres, 1 mayúscula y 1 número"
          />
        </label>
        {/* <Navigate to="/eeeeeeh" /> */}
        <br />
        <button type="submit">Registrarme</button>
      </form>
      {error && <h2 className="error">{error}</h2>}     {/*si hay error nos lo muestra*/}
    </div>
  );
};

export default Register;
