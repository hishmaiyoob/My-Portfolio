import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <main>
        <Hero />
        <About/>
      </main>
    </div>
  );
}

export default App;
