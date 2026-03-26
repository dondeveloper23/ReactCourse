import { searchProductByQuery } from "@/services/productService"

export default async function handler(req, res) {
  if (!req.query.q) {
    res.status(400).json({message: "Parameter has not been sent"})
  }
  const data = await searchProductByQuery(req.query.q)
  console.log(req.query.query)
  console.log(data)
  res.status(200).json(data)
}
