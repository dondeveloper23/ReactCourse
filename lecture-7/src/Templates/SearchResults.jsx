import { Container } from "react-bootstrap";
import MovieCard from "./Snippets/MovieCard";
import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const SearchResults = () => {
 const { movies } = useContext(MovieContext);

  return (
    <>
      <div className="bg-dark">
        <Container className="d-flex flex-wrap">
          {movies && movies.map((movie) => {
            return <MovieCard movie={movie} />;
          })}
        </Container>
      </div>
    </>
  );
};

export default SearchResults;
