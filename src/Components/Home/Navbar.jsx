import { Link, NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const Navbar = ({ children }) => {
  const nav = (
    <>
      <NavLink>
        <li>
          <a>Home</a>
        </li>
      </NavLink>
      <NavLink>
        <li>
          <a>Add Product</a>
        </li>
      </NavLink>
      <NavLink>
        <li>
          <a>Orderd product</a>
        </li>
      </NavLink>
    </>
  );
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full  justify-between navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mb-0 px-2 mx-2">
            <Link to={"/"} className="flex items-center">
              <img
                src="https://i.ibb.co/mD4z5Rf/Royal-Food-Logo-trans.png"
                className="h-8 mr-3"
              />
              <span className="self-center text-green-500 text-2xl font-extrabold whitespace-nowrap dark:text-white">
                Royal Food
              </span>
            </Link>
          </div>
          <div className=" hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              {nav}
            </ul>
          </div>
          <div>
          <NavLink className={'bg-green-500 text-white p-2 rounded-lg'}>
            <a>Login</a>
          </NavLink>
          </div>
        </div>
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          {nav}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
