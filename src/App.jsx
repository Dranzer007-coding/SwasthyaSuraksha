import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import ArchitectureSection from "./components/ArchitectureSection";
import StatsSection from "./components/StatsSection";
import Dashboard from "./components/Dashboard";
import FutureSection from "./components/FutureSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ArchitectureSection />
      <StatsSection />
      <Dashboard />
      <FutureSection />
      <Footer />
    </>
  );
}
export default App;