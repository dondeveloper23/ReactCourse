"use client";
import { authLogin } from "@/services/productService";
import { useState } from "react";

export default function LogInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await handleLogin(username, password);
    if (data.accessToken) {
      console.log("token", data.accessToken)
      localStorage.setItem("token", data.accessToken);
    }
  };

  const handleLogin = async (username, password) => {
    const response = await fetch("/api/auth_login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = await response.json()
    return data
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter username"
        onChange={(e) => setUsername(e.currentTarget.value)}
      ></input>
      <input
        type="password"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.currentTarget.value)}
      ></input>
      <button type="submit">Log in</button>
    </form>
  );
}
