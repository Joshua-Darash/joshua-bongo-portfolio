
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <WhyWorkWithMe />
      <Contact />
      <Footer />
      <ThemeSwitcher />
    </div>
  );
};

export default Index;
