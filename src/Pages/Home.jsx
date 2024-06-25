import {useEffect, useState} from "react"
import {Link} from "react-router-dom"

function Home(){
    const [trending,setTrending] = useState(null)


useEffect(()=>{
    fetch('https://api.themoviedb.org/3/trending/all/day?api_key=4a25f4349798215e63e63f8751c48e4c')
    .then(res => res.json())
    .then(trending => setTrending(trending.results))
},[])
return(
    <>
    <h1>Trending today</h1>
    {trending && trending.map((movie)=>{
      return <Link to= {`/movies/${movie.id}`}>{movie.title}</Link>
    })}
    </>
)
}
export default Home