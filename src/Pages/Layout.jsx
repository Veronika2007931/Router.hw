import { NavLink, Outlet } from "react-router-dom"

const Layout =()=>{
    return(
        <>
        <div>
            <ul>
                <li>
                    <NavLink>Home</NavLink>
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