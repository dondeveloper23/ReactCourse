import AllVideos from "../Components/AllVideos";
import SearchBar from "../Components/SearchBar";
import {useState} from "react";
import VIDEOS from "./../videos.json"

const Home = () => {

    const [videos, setVideos] = useState(VIDEOS);
    const [filteredVideos, setFilteredVideos] = useState(VIDEOS);

    const handleSearchVideos = (results) => {
      setFilteredVideos(results)
    };


    return (
        <>
            <SearchBar  videos={videos} onSearchVideo={handleSearchVideos}/>
            <AllVideos videos={filteredVideos}/>
        </>
    )
}

export default Home;