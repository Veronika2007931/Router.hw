import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Cast(){

    const {movieId} = useParams()
    const [cast, setCast] = useState()

    useEffect(()=>{
        console.log('hello')
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=4a25f4349798215e63e63f8751c48e4c`)
        .then(res => res.json()) 
        .then(cast => {
            setCast(cast)
             console.log("Hi")
        })
        .catch(eror=>console.log(eror))

    },[movieId])

           return(
            <>
             <ul>
                {cast && cast.map((actor)=>{
            return(
                <li>
                    <img src={actor.profile_path} alt="actor photo" />
                    <h1>{actor.name}</h1>
                    <p>Character: {actor.character} </p>
                </li>
            )
                })}
             </ul>
            </>
        )
    

    
}

export default Cast;