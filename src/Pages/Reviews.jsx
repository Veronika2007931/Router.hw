import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"


function Reviews(){

    const {movieId} = useParams()
    

    const [review, setReview]= useState()

useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=4a25f4349798215e63e63f8751c48e4c`)
    .then(res=>res.json())
    .then(review => {
        setReview(review)
        
    })
    .catch(eror=>console.log(eror))
},[])


return(
    <>
    <ul>
        {review.map((review)=>{
            <li>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
                <p>{review.created_at}</p>
            </li>
        })}
    </ul>
      </>
)
}

export default Reviews;