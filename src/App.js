import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Home from "./components/Home";
import './App.css';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
function App() {
  return (
    <>

     <CustomCursor />

      <Navbar />

      <Home />

      <About/>

     <Skills/>

      <Projects/>

      <Experience/>

      <Achievements/>

     <Contact/>
    </>
  );
}

export default App;