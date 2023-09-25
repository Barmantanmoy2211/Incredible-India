import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import CardSection from "./components/CardSection";

function App() {
  return (
    <div className="bg-[url('../public/image3.svg')] bg-fixed">
      <section
        className="h-[940px] flex flex-col text-black  bg-no-repeat bg-cover"
        style={{}}
      >
        <Navbar />
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
