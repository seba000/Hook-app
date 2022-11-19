import { useState } from "react";
import { useForm } from "../hooks";
import { Message } from "./Message";

export const FormWithCustomHook = () => {
  const { formState, onResetForm, onInputChange, username, email, password } =
    useForm({
      username: "",
      email: "",
      password: "",
    });
  //const { username, email, password } = formState;

  return (
    <>
      <h1>Formulario custom hook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="asd@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <button onClick={onResetForm} className="btn btn-primary mt-2">
        Borrar
      </button>
    </>
  );
};
