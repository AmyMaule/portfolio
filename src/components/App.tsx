import About from "./About";
import Contact from "./Contact";
import Games from "./Games";
import Footer from "./Footer";
import Intro from "./Intro";
import Navbar from "./Navbar";
import Projects from "./Projects";

import { 
  ongoingProjectData,
  projectData
} from "../utilities/data";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Intro />
      <div className="projects-bg-container">
        <Projects 
          projectData={projectData}
          title="Portfolio" 
        />
        <Projects
          projectData={ongoingProjectData}
          title={`Work \nin progress`} 
        />
        <Games />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App;
