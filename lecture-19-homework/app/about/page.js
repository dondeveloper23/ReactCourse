import Image from "next/image";

const  About = async () => {
  const response = await fetch("https://dummyjson.com/posts?limit=1")
  const data = await response.json()
  const post = data.posts[0]
  console.log(post)

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Image
      
        loading="eager"
        src="/images/boxing.jpg"
        alt="Boxing ring"
        width="600"
        height="350"
      />
    </div>
  );
};

export default About;
