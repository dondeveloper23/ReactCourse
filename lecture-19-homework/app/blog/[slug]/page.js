import Image from "next/image";

export default async function BlogSlug({ params }) {
  const { slug } = await params;
  console.log(slug);
  const response = await fetch(`https://dummyjson.com/products/${slug}`);
  const data = await response.json();
  console.log(data);
  if (!data.id) {
    return <h1>This page doesn't exit</h1>;
  }
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.category}</p>
      <p>${data.price}</p>
      {data.images ? (
        <div>
          {data.images.map((img, index) => (
            <Image
            key={index}
              loading="eager"
              src={img}
              alt="Boxing ring"
              width="600"
              height="350"
            />
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
