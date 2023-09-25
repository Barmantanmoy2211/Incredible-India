import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";


function App() {
  

  return (
    <div className="min-h-screen flex flex-col text-black">
			<Navbar />
			<Main/>

			<Footer/>
		</div>	
  );
}

export default App;
