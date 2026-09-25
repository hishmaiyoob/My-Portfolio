import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <main>
        <Hero />
        <About/>
        <Experience/>
        <Projects/>
      </main>
    </div>
  );
}

export default App;
