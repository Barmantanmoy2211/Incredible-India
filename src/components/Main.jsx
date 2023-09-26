import React from "react";
import CardSection from "./CardSection";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
    <main className="container mx-auto px-6 pt-16 flex-1 text-center">
      <h2 className="text-2xl mt-[150px] md:text-4xl lg:text-6xl uppercase">
        Welcome to
      </h2>
      <h1 className="text-3xl md:text-6xl lg:text-8xl font-black mb-8">
        HeritageIND
      </h1>

      <p className="text-base md:text-lg lg:text-2xl mb-8">
        A place where unity in diversity
      </p>
    </main>
    {/* <section>
        <CardSection className="flex space-x-4 justify-evenly flex-wrap h-auto bg-white py-8 " />
      </section> */}
      {/* <Footer /> */}
    </>
  );
};

export default Main;
