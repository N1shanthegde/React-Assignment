// import React from "react";
import { Outlet } from "react-router-dom";
// import MainBody from "./MainBody";
import NavBar from "./NavBar";
import Options from "./Options";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <NavBar />
      <Options />
      <Outlet />
      <Footer />
    </>
  );
}

export default Home;
