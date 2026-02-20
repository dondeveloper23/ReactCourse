import axios from "axios";

export const callOMDBApi = async () => {
    const response = await axios.get(process.env.REACT_APP_OMDBAPI_URL + "?t=terminator&apikey=" + process.env.REACT_APP_OMDBAPI_KEY);
    console.log(response.data);
}