import logo from './logo.svg';
import './App.css';
import axios from "axios";
import MovieSearchInput from "./components/MovieSearchInput";

console.log(process.env.REACT_APP_OMDBAPI_KEY, process.env.REACT_APP_OMDBAPI_URL);



function App() {
  return (
    <>
        <MovieSearchInput />
    </>
  )
}

export default App;
