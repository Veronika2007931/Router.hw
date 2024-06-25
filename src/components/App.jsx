import {Routes, Route, NavLink} from "react-router-dom"
import Layout from "Pages/Layout";
import Home from "Pages/Home"
import Movies from  "Pages/Movies"
import Cast from "Pages/Cast"
import MovieDetails from "Pages/MovieDetails"
import Reviews from "Pages/Reviews"
 function App(){
  return (
    <div>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/movies/:movieId" element={<MovieDetails/>}>
        <Route path="cast" element={<Cast/>}/>
        <Route path="review" element={<Reviews/>}/>
      </Route>
      </Route>
    </Routes>
    </div>
  );
};

export default App;