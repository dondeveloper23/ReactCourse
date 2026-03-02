import {useEffect, useState} from "react";
import axios from "axios";
import MovieCard from "../Templates/Snippets/MovieCard";

const Movies = () => {
    const searchMovieByTitle = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_OMDBAPI_URL}?t=${movieTitle}&apikey=${process.env.REACT_APP_OMDBAPI_KEY}`);
            setMovieData(response.data)
        } catch (e) {
            console.log(e);
        }


    }

    const [movieTitle, setMovieTitle] = useState("Lord Of The Rings")
    const [movieData, setMovieData] = useState({})


    useEffect(() => {
        searchMovieByTitle(movieTitle);
    }, []);



    return (
        <>
            <form>
                <input type="text" placeholder="Enter Movies" onInput={e=> setMovieTitle(e.currentTarget.value) } />
                <button onClick={searchMovieByTitle} type="button">Search movie</button>
            </form>
            <MovieCard movie={movieData}/>
        </>
    )
}

export default Movies