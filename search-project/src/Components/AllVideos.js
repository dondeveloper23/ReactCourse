
import VIDEOS from "./../videos.json"

const GetAllVideos = () => {
    return (
        VIDEOS.map( video => {
                return <a href={video.url} key={video.id} target="_blank" rel="noopener noreferrer">
                    <img src={video.cover} alt={video.title} />
                    <h3>{video.title}</h3>
                </a>
            })
    )
}

export default GetAllVideos;