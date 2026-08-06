import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import FloatingSocialIcons from "./FloatingSocialIcons";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <FloatingSocialIcons/>
      <Footer/>
    </div>
  );
};

export default Layout;