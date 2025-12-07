
import bookLogo from '../../assets/Book_Logo.png'
import { RiBookLine } from "react-icons/ri";
import { Link, NavLink } from "react-router";

const Navbar = () => {

  const navItems = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/book">Book Parcel</NavLink></li>
    <li><NavLink to="/track">Track Parcel</NavLink></li>
    <li><NavLink to="/pricing">Pricing</NavLink></li>
  </>

  return (
    <div className="navbar bg-base-100 shadow sticky top-0 z-50">
      {/* logo */}
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold flex items-center gap-2">
         <img className='w-[120px] h-[35px]' src={bookLogo}/>
        </Link>
      </div>

      {/* menu desktop */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>

      {/* profile right side */}
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <img width="32" src="/user.png" />
        </label>
        <ul tabIndex={0} className="menu dropdown-content bg-base-100 shadow w-52 mt-3">
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/profile">Profile</NavLink></li>
          <li><button>Logout</button></li>
        </ul>
      </div>

      {/* mobile menu */}
      <div className="lg:hidden dropdown">
        <label tabIndex={0} className="btn btn-ghost">
          <svg width="24" height="24">...</svg>
        </label>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 shadow w-52">
          {navItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
