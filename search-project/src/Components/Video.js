import {useParams} from 'react-router-dom'
import VIDEOS from "./../videos.json"
const Video = () => {
    const { id } = useParams();
    let videoFound = null;

    VIDEOS.forEach((video) => {
        if (video.id == id) {
            videoFound = video;
        }
    })

    if (videoFound === null) {
        return <h1>No video found</h1>
    }

    return (
        <>
            <h3> {videoFound.title}</h3>
            <p>{videoFound.url}</p>
            <iframe src={videoFound.url}></iframe>
        </>
    )
}

export default Video