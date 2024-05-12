import Games from "./components/Games";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

import { 
  ongoingProjectData,
  projectData
} from "./utilities/data";

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
          title="Work in progress" 
        />
        <Games />
      </div>
      {/* TO DO: small 'about me' section here */}
      {/* TO DO: add footer */}
    </div>
  )
}

export default App;
