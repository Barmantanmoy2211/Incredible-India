import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import CardSection from "./components/CardSection";

function App() {
  return (
    <>
      <section
        className="h-[940px] flex flex-col text-black bg-[url('../public/image3.svg')] bg-no-repeat bg-cover"
        style={{}}
      >
        <Navbar />
        <Main />
      </section>
      <section>
        <CardSection className="flex space-x-4 justify-center h-72 bg-white py-8 " />
      </section>
      <Footer />
    </>
  );
}

export default App;
