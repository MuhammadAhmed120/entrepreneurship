import Hero from "./components/Hero";
import About from "./components/About";
import ProductPreview from "./components/ProductPreview";
import Philosophy from "./components/Philosophy";
import Journey from "./components/Journey";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <ProductPreview />
      <Philosophy />
      <Journey />
      <CTA />
      <Footer />
    </div>
  );
}