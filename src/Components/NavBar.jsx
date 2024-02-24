import { Link } from "react-router-dom";
const NavBar = () => {
  const loggedIn = true;
  return (
    <nav className="bg-white border-gray-200 border-2">
      <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:py-1">
        <Link to="/">
          <span className="text-2xl font-semibold whitespace-nowrap cursor-pointer">
            Qetero
          </span>
        </Link>
        {loggedIn ? (
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:bg-white md:border-0">
            <li>
              <Link to="/">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="Appointments">
                <span>Appointments</span>
              </Link>
            </li>
            <li>
              <Link to="Favorites">
                <span>Favorites</span>
              </Link>
            </li>
            <li>
              <Link to="Profile">
                <span>Profile</span>
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="flex flex-col p-4 mt-4 border  border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:bg-white md:border-0">
            <li>
              <Link
                to="/sign-up"
                className="md:text-blue-500 md:border md:border-blue-500 md:px-4 md:py-1 md:rounded-full md:text-sm"
              >
                Sign up
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="md:bg-blue-500 md:border md:border-blue-500 md:text-white md:px-5 md:py-1 md:rounded-full md:text-sm"
              >
                Log in
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
