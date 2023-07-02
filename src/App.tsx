import './App.css'
import ListGroup from './components/ListGroup'
import { useState } from 'react'

function experience(currExperience: number) {
  if (currExperience === 0) {
    return <h3>Apple</h3>
  } else {
    return <h3>NUS</h3>
  }
}

function project(currExperience: number) {
  if (currExperience === 0) {
    return <h3>LifeHack 2023</h3>
  } else if (currExperience === 1) {
    return <h3>Huawei Tech4City 2022</h3>
  } else if (currExperience === 2) {
    return <h3>NUS ECC 2022</h3>
  } else {
    return <h3>NUS Orbital</h3>
  }
}

function App() {
  const [selectedDataExperience, setExperienceData] = useState(0)
  const sendDataExperience = (data: number) => {setExperienceData(data)}
  let experienceTitles = ["Apple", "NUS"]

  const [selectedDataProject, setProjectData] = useState(0)
  const sendDataProject = (data: number) => {setProjectData(data)}
  let projectTitles = ["LifeHack 2023", "Huawei Tech4City 2022", "NUS ECC 2022", "NUS Orbital"]

  return (
  <>
    <title> Ryan's Personal Website </title>
    <div className="mainDiv">
      <div>
        <h1 className="hide"> a </h1>
      </div>

      <div className="topDiv">
        <header className="frontHeader"> Hi I'm Ryan! </header>
        <h1>Coming Y4 Business Analytics student in the National University of Singapore, 
          passionate about algorithms and spreading the same passion as an educator!
        </h1>
        <br></br>
        <a href="https://drive.google.com/file/d/1vw5do11pwu-DULqHE8jf5dPZWvatYfiY/view?usp=sharing" target="_blank" className="resumeButton">
          View my Resume!
        </a>
      </div>

      <div className="aboutMeDiv">
        <h1>About me</h1>
        <h3>
          I experience a thrill when trying to solve problems beyond my current capability, 
          and work really hard to overcome them! 
          I also find remarkable the amount of flexibility programming offers, 
          and how it can be used as a platform to express our creativity. 
          </h3>
      </div>

      <div className="experienceDiv">
        <h1>Experience</h1>
        <div className="experienceContent">
          <ListGroup items={experienceTitles} sendData={sendDataExperience}></ListGroup>
          <h3>{experience(selectedDataExperience)}</h3>
        </div>
      </div>

      <div className="projectsDiv">
        <h1>Projects</h1>
        <ListGroup items={projectTitles} sendData={sendDataProject}></ListGroup>
        <h3>{project(selectedDataProject)}</h3>
      </div>

      <div className="educationDiv">
        <h1>Education</h1>
      </div>
    </div>
  </>)
}

export default App;