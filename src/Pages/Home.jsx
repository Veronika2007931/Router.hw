import {useEffect, useState} from "react"

function Home(){
    const [trending,setTrending] = useState(null)


useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/11?api_key=4a25f4349798215e63e63f8751c48e4c')
    .then(res => res.json())
    .then(trending => setTrending(trending))
})
return(
    <>
    <h1>Trending today</h1>
    {trending ?? trending.map(()=>{

    })}
    </>
)
}
export default Home