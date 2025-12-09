

import { RiBookLine } from "react-icons/ri";
import { Link, NavLink } from "react-router";
import Logo from "../../component/Logo/Logo";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const {user, logOut} = useAuth();

  const navItems = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/all-books">All Books</NavLink></li>
       <li><NavLink to="/post-book">Post Book</NavLink></li>
       <li><NavLink to="/my-books">My Books</NavLink></li>
      <li><NavLink to="/dashboard">Dashboard</NavLink></li>
      <li><NavLink to="/coverage">Coverage</NavLink></li>
     
      
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow sticky top-0 z-50">
      {/* left */}
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold flex items-center gap-2">
          {/* <RiBookLine className="text-primary text-4xl" />
          BookCourier */}
          <Logo></Logo>
        </Link>
      </div>

      {/* center (desktop only) */}
      <div className="hidden lg:flex flex-1 justify-center items-center">
        <ul className="menu menu-horizontal">{navItems}</ul>
      </div>

      {/* right side always */}
      {/* <div className="flex-none hidden lg:block">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <img width="32" src="/user.png" />
          </label>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 shadow w-52 mt-3">
            <li><NavLink to="/profile">Profile</NavLink></li>
            <li><button>Logout</button></li>
            <li><NavLink to="/update">Update</NavLink></li>
          </ul>
        </div>
      </div> */}


        {/* right side always */}
      <div className="flex-none hidden lg:block">
        {
          user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <img
                  className="rounded-full"
                  width="40"
                  src={user.photoURL || "/user.png"}
                  alt="profile"
                />
                
              </label>

              <ul tabIndex={0} className="dropdown-content menu bg-base-100 shadow-xl rounded-md w-52 mt-3">
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><NavLink to="/update">Update Profile</NavLink></li>
                <li><button onClick={logOut}>Logout</button></li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="btn btn-secondary">Login</Link>
          )
        }
      </div>


      {/* mobile layout */}
      <div className="lg:hidden flex items-center gap-2">
        {/* mobile profile */}
        {/* <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <img width="32" src="/user.png" />
          </label>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 shadow w-52 mt-3">
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/profile">Profile</NavLink></li>
            {
              user?
              <a className="btn">Log Out</a>
              : <Link to="login" className="btn">Login</Link>
            }
          </ul>
        </div> */}


              {
        user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <img className="rounded-full" width="35" src={user.photoURL} />
            </label>

            <ul tabIndex={0} className="dropdown-content menu bg-base-100 shadow-lg w-52 mt-3">
              <li><NavLink to="/dashboard">Dashboard</NavLink></li>
              <li><NavLink to="/profile">Profile</NavLink></li>
              <li><NavLink to="/update">Update</NavLink></li>
              <li><button onClick={logOut}>Logout</button></li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn">Login</Link>
        )
      }


        {/* mobile menu */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <svg width="24" height="24">
              <path d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </label>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 shadow w-52 right-0 mt-3">
            {navItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
