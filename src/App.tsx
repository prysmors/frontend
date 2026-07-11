import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SiteBackground from "./components/SiteBackground";
import Hero from "./components/sections/Hero";
import TrustBar from "./components/sections/TrustBar";
import Dashboard from "./components/sections/Dashboard";
import TechnicalDiagram from "./components/sections/TechnicalDiagram";
import Capabilities from "./components/sections/Capabilities";
import PredictiveAnalytics from "./components/sections/PredictiveAnalytics";
import WhyUs from "./components/sections/WhyUs";
import About from "./components/sections/About";
import Testimonials from "./components/sections/Testimonials";
import Pricing from "./components/sections/Pricing";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";
import FinalCta from "./components/sections/FinalCta";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import ProductPage from "./components/ProductPage";

function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <TrustBar />
        <div className="section-divider" />
        <div className="section-tint">
          <Dashboard />
        </div>
        <div className="section-divider" />
        <TechnicalDiagram />
        <div className="section-divider" />
        <div className="section-tint">
          <Capabilities />
        </div>
        <div className="section-divider" />
        <PredictiveAnalytics />
        <div className="section-divider" />
        <div className="section-tint">
          <WhyUs />
        </div>
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <div className="section-tint">
          <Pricing />
        </div>
        <div className="section-divider" />
        <Testimonials />
        <div className="section-divider" />
        <div className="section-tint">
          <FAQ />
        </div>
        <div className="section-divider" />
        <Contact />
      </main>
      <FinalCta />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product" element={<ProductPage />} />
        <Route
          path="*"
          element={
            <div className="min-h-screen" style={{ color: "var(--color-text)" }}>
              <SiteBackground />
              <Header />
              <HomePage />
              <Footer />
              <CookieConsent />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
