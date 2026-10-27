import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import AIWorkflow from "@/components/AIWorkflow";
import VisualWork from "@/components/VisualWork";
// Reviews section hidden for now.
// import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        {/* The work comes first: a hiring manager scanning the page should
            reach the case studies and screens before the bio. */}
        <Projects />
        <VisualWork />
        <About />
        <Skills />
        <AIWorkflow />
        {/* <Reviews /> */}
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
