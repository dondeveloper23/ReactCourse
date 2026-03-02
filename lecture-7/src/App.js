import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Movies from "./components/Movies";
import axios from "axios";
import Navigation from "./Templates/Snippets/Navigation";
import Footer from './Templates/Snippets/Footer';

console.log(process.env.REACT_APP_OMDBAPI_KEY, process.env.REACT_APP_OMDBAPI_URL);


const App = () => {
  return (
    <>
        <Navigation />
        <Movies />
        <Footer />
    </>
  )
}

export default App;
