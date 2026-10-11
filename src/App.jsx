import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Background from "./components/Background";
import Contact from "./components/Contact";
import DashboardPage from "./components/DashboardPage";

// Tiny hash router: "#/amazon-dashboard" opens the dashboard page, anything else is the home page
const DASH = "#/amazon-dashboard";
const getPage = () => (window.location.hash.startsWith(DASH) ? "dash" : "home");

export default function App() {
  const [page, setPage] = useState(getPage);

  useEffect(() => {
    const onChange = () => setPage(getPage());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  useEffect(() => {
    if (page === "dash") return window.scrollTo(0, 0);
    const id = window.location.hash.slice(1);
    const el = id && document.getElementById(id);
    el ? el.scrollIntoView() : window.scrollTo(0, 0);
  }, [page]);

  if (page === "dash") return <DashboardPage />;
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
