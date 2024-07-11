import { useEffect, useState } from "react";
import {useParams, Link, Outlet} from "react-router-dom"
import {Cast} from "../Pages/Cast"
import {Review} from "../Pages/Reviews"

function MovieDetails(){
    
    const {movieId} = useParams()
    // чи можна це id  використати для касту аби уже точно знати інфу про який фільм ми шукаємо

    const [movie, setMovie]= useState()
   
    useEffect(()=>{
        
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=4a25f4349798215e63e63f8751c48e4c`)
        .then(res => res.json())
        .then(movie => {
            console.log(`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`)
            setMovie(movie)
        // навіщо тут сетмуві
        // тому що ми кожен раз перезаписуємо деталі про який фільм ми переглядаємо?
        })
        .catch(eror=>console.log(eror))
    },[])
    return(
   <>
    
        <h1>Movie Details</h1>
    {movie && <><img height={100} weight={200} src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
    <h1>{movie.title}</h1>
    <p>Users score: {movie.vote_average}</p>
    <h3>Overview</h3>
    <p>{movie.overview}</p>
    <h3>Geners {movie.genres}</h3></>}
    
    <h1>Additional information</h1>
    <ul>
            <li><Link to="cast">{Cast}</Link></li>
            <li><Link to="reviews">{Review}</Link></li>
        </ul>
        <Outlet/>
    </>
        

      
    )
}

export default MovieDetails;