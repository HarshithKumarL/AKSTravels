import React from "react";
import aksImg from "../assets/aksimages1.jpg";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Clients from "./Clients";

function Home() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-right text-white"
      style={{ backgroundImage: `url(${aksImg})` }}
      id="home"
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative z-10 flex flex-col justify-center h-full px-10 md:px-20 lg:items-start">
        <h1 className="text-md titillium-web-light leading-tight tracking-tight text-white text-center">
          Drive your dreams !
        </h1>
        <div className="relative text-center">
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-Apricot">
            <span className="relative protest-strike-regular">
              Welcome to AKS Travels
              {/* <span className="absolute inset-x-0 bottom-0 border-b-4 border-Apricot"></span> */}
            </span>
          </h2>
        </div>

        <button
          href="#contact"
          className="mt-8 font-urbanist inline-block bg-[#d16002] text-white font-semibold px-8 py-4 rounded-full hover:bg-Apricot hover:text-Blueberry transition duration-300 ease-in-out transform hover:scale-105"
        >
          GET QUOTE!
        </button>
      </div>

      <About id="about" />
      <Services id="services" />
      <Clients id="clients" />
      <Contact id="contact" />
    </div>
  );
}

export default Home;
