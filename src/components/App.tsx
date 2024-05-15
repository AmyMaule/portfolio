import Games from "./Games";
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
      </div>
      {/* TO DO: small 'about me' section here */}
      {/* TO DO: add footer */}
    </div>
  )
}

export default App;
