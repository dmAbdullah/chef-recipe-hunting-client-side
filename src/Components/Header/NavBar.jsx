import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import {AuthContext} from "../Provider/AuthProvider"

const NavBar = () => {

  const {user, logOut } = useContext(AuthContext);
  const handleLogOut= ()=>{
    logOut()
    .then()
    .catch (error=> {
      console.log(error);
    })
  }
  return (
    <>
      <div className="navbar px-8 font border-2 border-yellow-700">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-warning" : "default"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-warning" : "default"
                  }
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/" className=" font-bold text-xl text-orange-400">
            CibO ItalianO
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-semibold px-1">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-warning" : "default"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-warning" : "default"
                }
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {
            user && <div className="avatar mr-3">
            <div className="w-10 rounded-full ring-2 ring-orange-300 ring-offset-base-100 ring-offset-2">
              <img title={user.displayName} src={user.picture} />
            </div>
          </div>
          }
          <NavLink
            className="bg-orange-400 p-3 rounded-lg font-semibold  text-white"
          >
            { user? <button onClick={handleLogOut} >Logout</button> :
             <Link to="/login">
             <button>Login</button>
             </Link>}
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default NavBar;
