import React from "react";
import ProjectList from "./components/ProjectList";


const projects = [
  {
    id: 1,
    name: 'Reciplease',
    about: 'A recipe tracking app',
    technologies: ['Rails', 'Bootstrap CSS'],
  },
  {
    id: 2,
    name: 'Kibbles N Bitz',
    about: 'Tinder for dogs',
    technologies: ['React', 'Redux'],
  },
  {
    id: 3,
    name: 'Alienwares',
    about: 'Etsy for aliens',
    technologies: ['React', 'Redux', 'Rails'],
  },
];

function App() {
  return (
    <div>
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
