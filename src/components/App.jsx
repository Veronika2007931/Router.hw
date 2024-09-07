import {Routes, Route} from "react-router-dom"
import {lazy} from "react"
import { GlobalStyle } from "./globalStyled"
const Layout = lazy(()=>import("Pages/Layout"))
const Home = lazy(()=>import("Pages/Home"))
const Movies = lazy(()=>import("../Pages/Movies"))
const Cast = lazy(()=>import("Pages/Cast"))
const MovieDetails = lazy(()=>import("Pages/MovieDetails"))
const Reviews = lazy(()=>import("Pages/Reviews"))



 function App(){
  return (
    <div>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/movies/:movieId" element={<MovieDetails/>}>
        <Route path="cast" element={<Cast/>}/>
        <Route path="reviews" element={<Reviews/>}/>
      </Route>
      </Route>
    </Routes>
    <GlobalStyle/>
    </div>
  );
};

export default App;