
import AllVideos from "./Components/AllVideos";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home";
import Video from "./Components/Video";


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/video/:id" element={<Video/>}></Route>
                </Routes>
            </BrowserRouter>
            {/*<AllVideos />*/}
        </>

    )
}

export default App;
