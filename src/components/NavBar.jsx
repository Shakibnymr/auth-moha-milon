import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";


const NavBar = () => {

const {user,logOut} = useContext(AuthContext)
console.log(user)

const handleLogOut = () => {
  logOut()
  .then((result)=> {
    console.log(result.user)
  })
  .catch((error)=> {
    console.log(error)
  })
}

const NavLinks = <>
<li><NavLink

  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "" : ""
  }
>
  Home
</NavLink></li>
<li><NavLink

  to="/login"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "" : ""
  }
>
  Login
</NavLink></li>
<li><NavLink

  to="/register"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "" : ""
  }
>
  Register
</NavLink></li>
<li><NavLink

  to="/orders"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "" : ""
  }
>
  Orders
</NavLink></li>
</>

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
{NavLinks}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Auth-milon</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
  {NavLinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user?
      <>
      <span>{user.email}</span>
      <a onClick={handleLogOut} className="btn btn-sm">Sign Out</a>
      </>
       
       :

       <NavLink to="/login">
        <button className="btn-link">Login</button>
       </NavLink>
    
    }
    
  </div>
</div>
    );
};

export default NavBar;