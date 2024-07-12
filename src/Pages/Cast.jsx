import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Cast(){

    const {movieId} = useParams()
    const {cast, setCast} = useState()

    useEffect(()=>{
        
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=4a25f4349798215e63e63f8751c48e4c`)
        .then(res => res.json()) 
        .then(cast => {
            setCast(cast)
        })
        .catch(eror=>console.log(eror))

    },[movieId])

    return(
        <>
         {/* тут якщо об'єкт то за допомогою меп якщо ні то просто */}
        </>
    )

}

export default Cast;