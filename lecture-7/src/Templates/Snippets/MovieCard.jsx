import App from "../../App";

const MovieCard = ({ movie }) => {
  return (
    <>
      <div className="col-4 p-2 text-white">
        <img className="w-100" src={movie.Poster} />
        <h1>{movie.Title}</h1>
        <p>{movie.Year}</p>
      </div>
    </>
  );
};

export default MovieCard;
