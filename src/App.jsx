import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Program/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title subTitle="Our Program" title="What we Offer"></Title>
        <Programs></Programs>
        <About></About>
        <Title subTitle="Gallery" title="Campus Photos"></Title>
        <Campus></Campus>
        <Title subTitle="TESTIMONIALS" title="What Student Says"></Title>
        <Testimonials></Testimonials>
        <Title subTitle="Contact Us" title="Get in Touch"></Title>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
