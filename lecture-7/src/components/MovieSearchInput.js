import {callOMDBApi} from "../service/callOMDBApi";

const MovieSearchInput = () => {
    return (
        <div className="search-input">
            <input type="text"/>
            <button onClick={callOMDBApi}>Search Movie</button>
        </div>
    )

}

export default MovieSearchInput;