import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import ImpactHighlights from "@/components/ImpactHighlights";
import PointOfView from "@/components/PointOfView";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <FeaturedWork />
        <ImpactHighlights />
        {/* <PointOfView /> */}
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
