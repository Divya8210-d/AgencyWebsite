import Navbar from "../../../components/Navbar";
import About from "../../../components/About";
import Contact from "../../../components/Contact";
import { Hero } from "../../../components/Hero";
import Project from "../../../components/Project";
import { Services } from "../../../components/Services";
import Testimonials from "../../../components/Testimonial";
import Footer from "../../../components/Footer";

export default function Homepage() {
  return (
    < div className="bg-black min-h-screen">



      <div id="home">
        <Hero />
      </div>

      <div id="aboutus">
        <About />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="projects">
        <Project />
      </div>
      <Testimonials />
      <div id="contact">
        <Contact />
      </div>
      <Footer />



    </div>
  );
}
