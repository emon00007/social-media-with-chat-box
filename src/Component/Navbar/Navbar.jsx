import { HiUserGroup } from "react-icons/hi";
import { IoNotifications } from "react-icons/io5";
import { MdGroupAdd, MdHome, MdOutlineOndemandVideo } from "react-icons/md";
import { RiChat1Fill2, RiLayoutGrid2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = <>
    <li><NavLink to='/'><MdHome /></NavLink></li>
    <li><NavLink to='/FriendRequest'><MdGroupAdd /></NavLink></li>
    <li><NavLink to='/Video'><MdOutlineOndemandVideo /></NavLink></li>

    <li><NavLink to='/Group'><HiUserGroup /></NavLink></li>


  </>
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <ul className=" grid grid-cols-2">
            <li className="btn btn-ghost text-xl">See Book</li>
            <li >
              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                </label>
            </li>
          </ul>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-5 px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="flex items-center gap-3">
            <li><RiLayoutGrid2Fill /></li>
            <li><RiChat1Fill2 /></li>
            <li><IoNotifications /></li>
            <Link className="btn" to='/signIn'>Sign In</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;