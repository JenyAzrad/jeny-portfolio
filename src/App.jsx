import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Background from "./components/Background";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div id="home">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Background />
      <Contact />
    </div>
  );
}
