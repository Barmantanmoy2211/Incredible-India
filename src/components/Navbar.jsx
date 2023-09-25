

function Navbar() {
    return (
      <nav className="bg-opacity-70 bg-white p-4 flex justify-between items-center">
        <div className="text-black text-3xl mx-96">Incredible India</div>
        <div className="flex space-x-6 mx-16 text-xl">
          <a href="#" className="text-black hover:text-gray-300">Home</a>
          <a href="#" className="text-black hover:text-gray-300">Heritage Sites</a>
          <a href="#" className="text-black hover:text-gray-300">Travel With Us</a>
          <a href="#" className="text-black hover:text-gray-300">Gallery</a>
          <a href="#" className="text-black hover:text-gray-300">Blog</a>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  