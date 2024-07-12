import { useEffect, useState } from "react";
import {useParams, Link, Outlet} from "react-router-dom"


function MovieDetails(){
    
    const {movieId} = useParams()
    

    const [movie, setMovie]= useState()
   
    useEffect(()=>{
        
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=4a25f4349798215e63e63f8751c48e4c`)
        .then(res => res.json())
        .then(movie => {
            
            setMovie(movie)
      
        })
        .catch(eror=>console.log(eror))
    },[movieId])
    return(
   <>
    
        <h1>Movie Details</h1>
    {movie && <>
    <img height={100} weight={200} src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
    <h1>{movie.title}</h1>
    <p>Users score: {movie.vote_average}</p>
    <h3>Overview</h3>
    <p>{movie.overview}</p>
    <h3>Geners </h3>
    <ul>
        {movie.geners.map(gener => <li>{gener.name}</li>)}
    </ul>
    </>}
    
    <h1>Additional information</h1>
    <ul>
            <li><Link to="cast">Cast</Link></li>
            <li><Link to="reviews">Reviews</Link></li>
        </ul>
        <Outlet/>
    </>
        

      
    )
}

export default MovieDetails;