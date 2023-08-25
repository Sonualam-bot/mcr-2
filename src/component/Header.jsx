import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <>
            <div className='bg-slate-900 flex  justify-around h-[10vh] items-center shadow-xl'>
                <NavLink className='font-bold cursor-pointer text-white  text-lg' to="/" >Home</NavLink>
                <NavLink className='font-bold cursor-pointer text-white text-lg' to="/archieve" >Archieve </NavLink>
            </div>
        </>
    )
}