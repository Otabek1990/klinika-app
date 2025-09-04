import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <nav className="bg-blue-600 flex items-center justify-between px-16 py-4 text-lg">
        <h2 className="text-white text-2xl capitalize">logo</h2>
        <NavLink to={"/"}>
          Asosiy 
        </NavLink>
        <NavLink to={"/login"}>
          Login
        </NavLink>
        <button className="btn">login</button>
    </nav>
  )
}

export default Navbar; 