// import { Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";

function Navbar() {
  return (
    <nav className="bg-opacity-70 bg-white p-4 flex justify-between items-baseline">
      <div className="text-black text-3xl mx-96">Incredible India</div>
      <div className="flex space-x-6 mx-16 text-xl">
        <TextField
          id="outlined-basic"
          label="Search by state"
          variant="outlined"
          className="h-4"
        />

        <a href="#" className="text-black hover:text-gray-300">
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
        </a>
        <Button variant="contained">Log in</Button>
        <Button variant="outlined">Sign Up</Button>
      </div>
    </nav>
  );
}

export default Navbar;
