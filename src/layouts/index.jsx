import React from "react";
import Typewriter from "typewriter-effect";
import Transition from "../components/Transition";

// Components
import Nav from "../components/Nav.jsx";

const Layout = ({ children, location }) => {
  return (
    <div className="md:max-w-3xl md:mt-4 md:mx-auto md:mb-20 mb-10 ">
      <h1 className="text-white text-4xl px-0 py-16 font-bold hidden md:block">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Alex Dinger")
              .pauseFor(2500)
              .deleteAll()
              .typeString("Front End Developer")
              .pauseFor(2500)
              .deleteAll()
              .typeString("Alex Dinger")
              .pauseFor(1000)
              .callFunction((state) => {
                state.elements.cursor.style.display = "none";
              })
              .start();
          }}
        />
      </h1>

      <div className="grid grid-cols-5 gap-10">
        <Nav />
        <main className="md:col-span-4 mt-20 md:m-0 col-span-5">
          <Transition location={location}>{children}</Transition>
        </main>
      </div>
    </div>
  );
};

export default Layout;
