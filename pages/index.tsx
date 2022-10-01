// Import's
import { useEffect } from "react";
import Header from "../components/header";
import Home from "../components/home";
import About from "../components/about";
import Skills from "../components/skills";
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
    </>
  );
};

export default App;
