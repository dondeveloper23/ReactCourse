import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Movies from "./components/Movies";
import axios from "axios";
import Navigation from "./Templates/Snippets/Navigation";
import Footer from "./Templates/Snippets/Footer";
import Search from "./components/Search";
import SearchResults from "./Templates/SearchResults";
import { MovieContext, MovieProvider } from "./context/MovieContext";

console.log(
  process.env.REACT_APP_OMDBAPI_KEY,
  process.env.REACT_APP_OMDBAPI_URL,
);

const App = () => {
  return (
    <>
      <MovieProvider>
        <Navigation />
        <Search />
        <Footer />
      </MovieProvider>
    </>
  );
};

export default App;
