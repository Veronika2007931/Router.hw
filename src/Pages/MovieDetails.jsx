import { useEffect, useState } from "react";
import {useParams, Link, Outlet} from "react-router-dom"

function MovieDetails(){
    const {movieId} = useParams()

    const [movie, setMovie]= useState()
    
    useEffect(()=>{
        console.log('name')
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=4a25f4349798215e63e63f8751c48e4c`)
        .then(res => res.json())
        .then(movie => setMovie(movie))
        .catch(eror=>console.log(eror))
    },[])
    return(
   <>
    
        <h1>Movie Details</h1>
    <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
    <h1></h1>
    <p>Users score: </p>
    <h3>Overview</h3>
    <h3>Geners</h3> 
    
    <ul>
            <li><Link to="cast">Cast</Link></li>
            <li><Link to="reviews">Reviews</Link></li>
        </ul>
        <Outlet/>
    </>
        

      
    )
}

export default MovieDetails;