import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div className='text-gray-800'>
        <Navbar />

        <Routes>
          <Route
            path='/'
            element={
              <>
                <Hero />
                {/* <About />
                <Projects />
                <Experience /> */}
              </>
            }
          />

          <Route path='/projects' element={<Projects />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
