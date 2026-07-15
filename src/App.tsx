import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { NAV_LINKS } from "./data/content";
import Header from "./components/Header";
import SiteBackground from "./components/SiteBackground";
import ScrollManager from "./components/ScrollManager";
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
import ChatwootWidget from "./components/ChatwootWidget";
import ProductPage from "./components/ProductPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

const VALID_SLUGS = new Set(
  NAV_LINKS.map((l) => l.href.replace("#", ""))
);

function SectionRedirect() {
  const { sectionSlug } = useParams();
  if (VALID_SLUGS.has(sectionSlug)) {
    return <Navigate to={`/#${sectionSlug}`} replace />;
  }
  return <Navigate to="/" replace />;
}

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
      <ScrollManager />
      <ChatwootWidget />
      <Routes>
        <Route path="/product" element={<ProductPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/:sectionSlug" element={<SectionRedirect />} />
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
