// App.jsx
import React, { Suspense, lazy, useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; // Router সরানো হয়েছে
import Layout from "./components/Layout";
import LoadingSpinner from "./components/LoadingSpinner";
import RouteLoading from "./components/RouteLoading"; // ✅ যোগ করা হয়েছে
import Blog from "./pages/Blog";
//import Vouchers from "./pages/Vouchers"; // ✅ Vouchers পেজ
import Reviews from "./pages/Reviews";
import HowItWorks from "./components/HowItWorks"; // ✅ HowItWorks পেজ
import VoucherSection from "./components/VoucherSection";
// import VoucherCard from "./components/VoucherCard"; // ❌ সরানো হয়েছে (ব্যবহার নেই)
// import VoucherSection from "./components/VoucherSection"; // ❌ সরানো হয়েছে (পেজ ব্যবহার করছি)
import VoucherDetails from "./pages/VaoucherDetails"
import ExamList from "./pages/ExamList";
// Lazy load pages (code splitting)
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isRouteLoading, setIsRouteLoading] = useState(false);

  // Initial Loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Route Change Loading
  useEffect(() => {
    setIsRouteLoading(true);
    const timer = setTimeout(() => {
      setIsRouteLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      {isRouteLoading && <RouteLoading />}
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="how-it-works" element={<HowItWorks />} />
            <Route path="vouchers" element={<VoucherSection />} /> {/* ✅ Vouchers পেজ */}
            <Route path="reviews" element={<Reviews />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="vouchers/:id" element={<VoucherDetails />} />
            <Route path="vouchers/:id/exams" element={<ExamList/>}/>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;