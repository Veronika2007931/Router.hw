import {Routes, Route, NavLink} from "react-router-dom"
import Layout from "Pages/Layout";
import Movies from  "Pages/Movies"
export function App(){
  return (
    <div>
    <Routes>
      <Route pats="/" element={<Layout/>}>
       <Route pats="/Movie" element={<Movies/>}></Route>
      </Route>
    </Routes>
    </div>
  );
};
