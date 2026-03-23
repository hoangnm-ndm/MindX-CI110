import { NavLink } from "react-router";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="flex justify-between items-center p-2">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/test-lifecycle">Test</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/auth/login">Login</NavLink>
          </li>
          {/*  http://localhost:5173/login */}
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
