import About from "./components/About";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navabar from "./components/Navbar";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div>
      <div className="p-5 md:px-[15%]">
        <Navabar />
        <Home />
      </div>
      <About />

      <div className="p-5 md:px-[15%]">
        <Experiences />
        <Projects/>
      </div>
      <Footer/>
    </div>
  );
}
