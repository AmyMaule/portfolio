import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Intro />
      <Projects />
    </div>
  )
}

export default App;
