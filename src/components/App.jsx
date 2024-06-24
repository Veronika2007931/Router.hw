import {Routes, Route, NavLink} from "react-router-dom"
import Layout from "Pages/Layout";
import Home from "Pages/Home"
import Movies from  "Pages/Movies"
import Cast from "Pages/Cast"
import MovieDetails from "Pages/MovieDetails"
export function App(){
  return (
    <div>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/movie" element={<Movies/>}>
        <Route path="actors" element={<Cast/>}/>
        <Route path="detail" element={<MovieDetails/>}/>
      </Route>
      </Route>
    </Routes>
    </div>
  );
};
