import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <>
            <div className="header">
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/archieve" >Archieve </NavLink>
            </div>
        </>
    )
}