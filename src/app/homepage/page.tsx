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
    < div  className="bg-black min-h-screen">
      


<Hero/>

<About/>

<Services/>

<Project/>
<Testimonials/>
<Contact/>
<Footer/>



    </div>
  );
}
