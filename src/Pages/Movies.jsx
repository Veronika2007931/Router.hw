import {Link} from "react-router-dom"

const Movies=()=>{
    return(
       <>
           <ul>
            <li><Link to="cast">Cast</Link></li>
            <li><Link to="details">Details</Link></li>
        </ul>
       </>
    )
}

export default Movies