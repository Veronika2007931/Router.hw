import {Routes, Route, NavLink} from "react-router-dom"
import Layout from "Pages/Layout";
import Home from "Pages/Home"
import Movies from  "Pages/Movies"
export function App(){
  return (
    <div>
    <Routes>
      <Route pats="/" element={<Layout/>}>
      <Route pats="/Home" element={<Home/>}></Route>
      <Route pats="/Movie" element={<Movies/>}></Route>
      </Route>
    </Routes>
    </div>
  );
};
