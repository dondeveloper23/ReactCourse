import { getProductById } from "@/services/productService"
import Image from "next/image"


const ProductPage = async ({params}) => {
  const {id} = await params
  const data = await getProductById(id)
  console.log(data)
  if (!data) {
    console.log("Not found DULEeee")
    return <h1>404 Page not found</h1>
  }

  return (
    <div className="product-wrapper">
      <h1>{data.title}</h1>
      {data.images.map((img, index) =>
        (<Image src={img} width="250" height="300" alt={data.title} key={index}/>)
      )}
    </div>
  )
}

export default ProductPage

