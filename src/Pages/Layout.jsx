import { NavLink, Outlet } from "react-router-dom"

const Layout =()=>{
    return(
        <>
        <div>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink>Movie</NavLink>
                </li>
            </ul>
        </div>
        <Outlet/>
        </>
    )
}

export default Layout;