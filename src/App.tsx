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
      <Projects 
        projectData={projectData}
        title="Portfolio" 
      />
      <Projects
        projectData={ongoingProjectData}
        title="Work in progress" 
      />
    </div>
  )
}

export default App;
