import { useAtomValue, useSetAtom } from "jotai";
import { useState } from "react";
import { userAtom } from "../States/userState";
import Tasks from "./Tasks";
import { useForm } from "react-hook-form";
import CreateTask from "./CreateTask";

export const Login = () => {
  const userData = useAtomValue(userAtom);
  const setUserData = useSetAtom(userAtom);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setUserData({
      email: data.email,
      password: data.password,
      isLoggedIn: true,
    });
  };

  const logOut = () => {
    setUserData({
      email: " ",
      password: " ",
      isLoggedIn: false,
    });
  };

  return (
    <>
      {userData.isLoggedIn ? (
        <div className="tasks-div">
          <CreateTask />
          <Tasks />
          <button onClick={logOut} className="log-out-button">Logout</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.email && <p>{errors.email.message}</p>}
          <input
            type="text"
            placeholder="Enter your email"
            {...register("email", {
              required: "E-mail is required!",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format!",
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required!",
              maxLength: {
                value: 10,
                message: "Password can't be more than 10 characters!",
              },
              validate: {
                isCorrect: (val) => val === "123456",
              },
            })}
          />
          <input type="submit" />
        </form>
      )}
    </>
  );
};

export default Login;
