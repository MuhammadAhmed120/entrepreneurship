import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import ProductPreview from "./components/ProductPreview";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Philosophy from "./components/Philosophy";
import Journey from "./components/Journey";
import Team from "./components/Team";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <ProductPreview />
      <Gallery />
      <Reviews />
      <Philosophy />
      <Journey />
      <Team />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
}