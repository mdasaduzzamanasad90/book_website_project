import { NavLink } from "react-router-dom";

const Header = () => {
  const activebutton = ({ isActive }) =>
    isActive && "text-[#23BE0A] font-bold border border-[#23BE0A]";

  const link = (
    <>
      <li className="text-lg">
        <NavLink to="/" className={activebutton}>
          Home
        </NavLink>
      </li>
      <li className="text-lg">
        <NavLink to="/listedbooks" className={activebutton}>
          Listed Books
        </NavLink>
      </li>
      <li className="text-lg">
        <NavLink to="/pagestoread" className={activebutton}>
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <nav>
        <div className="flex items-center">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {link}
              </ul>
            </div>
            <a className="md:text-4xl text-2xl font-bold">Book Vibe</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{link}</ul>
          </div>
          <div className="navbar-end md:gap-5 gap-3">
            <a className="btn font-bold text-base bg-[#23BE0A] w-24 rounded-lg text-white">
              Sign In
            </a>
            <a className="btn font-bold text-base bg-[#59C6D2] w-24 rounded-lg text-white">
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
