

const VIDEOS = [
    {
        id: 1,
        title: "How To Learn React",
        url: "https://www.youtube.com/watch?v=SqcY0GlETPk&t=163s",
        cover: "https://i.ytimg.com/vi/SqcY0GlETPk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBvF7R7tYEZqgAYn6fM5A_QgI1e-A"
    },
    {
        id: 2,
        title: "How To Learn CSS",
        url: "https://www.youtube.com/watch?v=wRNinF7YQqQ",
        cover: "https://i.ytimg.com/vi/wRNinF7YQqQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD7OQC2Rt6_U-eVbZlqN2ImnWwUsA"
    },

]

const App = () => {
    return (
        <>
            {VIDEOS.map( video => {
                return <a href={video.url} key={video.id} target="_blank" rel="noopener noreferrer">
                    <img src={video.cover} alt={video.title} />
                    <h3>{video.title}</h3>
                </a>
            })}
        </>

    )
}

export default App;
