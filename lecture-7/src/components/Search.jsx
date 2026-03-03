import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import SearchResults from "../Templates/SearchResults";
import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";


const Search = () => {
  const { setMovies } = useContext(MovieContext);
  const [searchTerm, setSearchTerm] = useState("Hobbies");

  const searchMovies = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_OMDBAPI_URL}?s=${searchTerm}&apikey=${process.env.REACT_APP_OMDBAPI_KEY}`,
      );
      setMovies(response.data.Search);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Form className="bg-dark text-white p-3">
        <Container>
          <Form.Group controlId="formBasicTerm">
            <Form.Label>Movie Title</Form.Label>
            <Form.Control
              onInput={(e) => setSearchTerm(e.target.value)}
              type="email"
              placeholder="Enter movie title"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Button variant="secondary" type="button" onClick={searchMovies}>
            Search
          </Button>
        </Container>
      </Form>

      <SearchResults />
    </>
  );
};

export default Search;
