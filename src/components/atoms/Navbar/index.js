import React from "react";
export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="absolute bg-sky-500 top-0 left-0 w-full z-10 md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <h2 className="text-white text-sm uppercase hidden lg:inline-block font-semibold">
            TestShopp
          </h2>
        </div>
      </nav>
    </>
  );
}
