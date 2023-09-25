import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import CardSection from "./components/CardSection";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Blogs from "./components/Blogs";

function App() {
  return (
    <div className="bg-[url('../public/image3.svg')] bg-fixed">
      <section
        className="h-[940px] flex flex-col text-black  bg-no-repeat bg-cover"
        style={{}}
      >
        <Navbar />
        {/* <Routes> */}
        {/* <Route exact path="/blogs" element={<Blogs/>}/> */}
        {/* </Routes> */}
        <Main />
      </section>
      <section>
        <CardSection className="flex space-x-4 justify-evenly flex-wrap h-auto bg-white py-8 " />
      </section>
      <Footer />
    </div>
  );
}

export default App;
