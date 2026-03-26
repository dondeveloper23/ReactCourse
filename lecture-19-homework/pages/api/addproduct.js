import { addProduct, searchProductByQuery } from "@/services/productService"

export default async function handler(req, res) {

  console.log(req.body)
  addProduct(req.body.title, req.body.description, req.body.price)
  res.status(200).json({
    message: "succes"
  });
}
