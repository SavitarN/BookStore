import React from "react";
import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
const Home = () => {
  return (
    <section className="min-h-screen bg-midnight">
      <section className="">
        <Hero />
      </section>
      <section className="mt-15">
        <About />
      </section>
      <section>
        <Contact />
      </section>
    </section>
  );
};

export default Home;
