import React from "react";
import NavBar from "../components/NavBar";
import MarketBody from "../components/MarketBody";

function Market() {
  return (
    <section className=" lg:h-[100vh] w-[100vw] flex flex-col overflow-hidden relative ">
      <div className="background-market flex-1 flex-col flex">
        <NavBar />
        <MarketBody />
      </div>
    </section>
  );
}

export default Market;
