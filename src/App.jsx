// App.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route, Router } from "react-router-dom";
import Layout from "./components/Layout";
import LoadingSpinner from "./components/LoadingSpinner";
import Blog from "./pages/Blog";
import Raq from "./pages/Raq";
import Vouchers from "./pages/Vouchers";
import Reviews from "./pages/Reviews";

// Lazy load pages (code splitting)
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog/>}/>
          <Route path="faq" element={<Raq/>}/>
          <Route path="vouchers" element={<Vouchers/>}/>
          <Route path="reviews" element={<Reviews/>}/>
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;