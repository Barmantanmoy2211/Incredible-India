// import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-opacity-70 bg-white p-4 flex justify-between items-baseline">
      <div className="text-black text-3xl mx-96">Incredible India</div>
      <div className="flex space-x-6 mx-16 text-xl">
        <ui className="flex gap-x-5">
          <li className="list-none text-block hover:text-grey-300 gap-x-8">
            <Link to="/" className="text-black hover:text-gray-300">
              Home
            </Link>
          </li>
          <li className="list-none text-block hover:text-grey-300 gap-x-8">
            <Link to="/" className="text-black hover:text-gray-300">
              TravalIND
            </Link>
          </li>
          <li className="list-none text-block hover:text-grey-300">
            <Link to="/festivales" className="text-black hover:text-gray-300">
              Upcoming_Festivales
            </Link>
          </li>
          <li className="list-none text-block hover:text-grey-300">
            <Link to="/buyProducts" className="text-black hover:text-gray-300">
              Buy_Products
            </Link>
          </li>
          <li className="list-none text-block hover:text-grey-300">
            <Link to="/blogs" className="text-black hover:text-gray-300">
              Blog
            </Link>
          </li>
        </ui>

        {/* <a href="#" className="text-black hover:text-gray-300">
          Home
        </a>
        <a href="#" className="text-black hover:text-gray-300">
          Upcoming Festivals
        </a>
        <a href="#" className="text-black hover:text-gray-300">
          Buy Products
        </a>
        <a href="#" className="text-black hover:text-gray-300">
          Blog
        </a> */}
        <Button variant="contained">Log in</Button>
        <Button variant="outlined">Sign Up</Button>
      </div>
    </nav>
  );
}

export default Navbar;
