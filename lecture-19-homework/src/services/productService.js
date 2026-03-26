export async function getAllProducts(limit = 9) {
  const response = await fetch(`${process.env.PRODUCT_API_URL}?limit=${limit}`, {
    next: {
      revalidate: 3600,
    }
  })
  const data = await response.json()
  return data
}

export async function getProductById (id) {
  const response = await fetch(`${process.env.PRODUCT_API_URL}/${id}`)
  if (response.status === 404) {
    return false
  }
  return await response.json()
}

export async function searchProductByQuery (query) {
  const response = await fetch(`${process.env.PRODUCT_API_URL}/search?q=${query}`)
  return await response.json()
}

export function addProduct(title, descritpion, price) {
  fetch(`${process.env.PRODUCT_API_URL}/add`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      title: title,
      descritpion: descritpion,
      price: price
    })
  })
  .then(res => res.json())
  .then(console.log())
}

export  async function authLogin(username, password) {
  const response = await fetch(`${process.env.AUTH_API_URL}/login`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({

    username: username,
    password: password,
    expiresInMins: 30, // optional, defaults to 60
  }),
  credentials: 'include' // Include cookies (e.g., accessToken) in the request
})
const data = await response.json()
return data
}





















