import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyNav from "@/components/StickyNav";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <StickyNav />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
