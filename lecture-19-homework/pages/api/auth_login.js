import { authLogin } from "@/services/productService"

export default async function handler(req, res) {
const data = await authLogin(req.body.username, req.body.password)

res.status(200).json(data)
}
