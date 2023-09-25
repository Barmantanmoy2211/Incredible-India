
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import '../src/index.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  

  return (
    <div className="body1 min-h-screen flex flex-col text-black">
			
			<Navbar />
			<Main/>

			<Footer/>
		</div>	
  );
}

export default App;
