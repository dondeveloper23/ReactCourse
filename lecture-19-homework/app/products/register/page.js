// 'https://dummyjson.com/products/add'
"use client"
import { useState } from "react";

export default function Register() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")

  const addProduct = () => {
    fetch("/api/addproduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        price: price,
        description: description
      })
    })
  }

  return (
    <form >
      <input type="text" placeholder="Enter product title"  onChange={e => setTitle(e.currentTarget.value)}></input>
      <input type="text" placeholder="Enter product description" onChange={e => setDescription(e.currentTarget.value)}></input>
      <input type="number" placeholder="Enter product price" onChange={e => setPrice(e.currentTarget.value)}></input>
      <button type="button" onClick={addProduct}>Add Product</button>
    </form>
  );
}
