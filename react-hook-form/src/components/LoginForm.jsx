import { useState } from "react";
import { useForm } from "react-hook-form";
import { EmailValidator } from "../Validators/EmailValidator";
import { PasswordValidator } from "../Validators/PasswordValidator";

const LoginForm = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const formSubmitted = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(formSubmitted)}>
        {errors.email && <p>{errors.email.message}</p>}
        <input
          type="text"
          placeholder="Enter e-mail"
          {...register("email", EmailValidator)}
        ></input>

        {errors.password && <p>{errors.password.message}</p>}

        <input
          type="password"
          placeholder="Unesite Lozinku"
          {...register("password", PasswordValidator)}
        ></input>
        <input type="submit" />
      </form>
    </>
  );
};

export default LoginForm;
