

const GetAllVideos = ({videos}) => {
    return (
        videos.map( video => {
                return <a href={video.url} key={video.id} target="_blank" rel="noopener noreferrer">
                    <img src={video.cover} alt={video.title} />
                    <h3>{video.title}</h3>
                </a>
            })
    )
}

export default GetAllVideos;