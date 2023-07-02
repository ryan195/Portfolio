import './App.css'
import ListGroup from './components/ListGroup'
import Apple from './components/Experience/Apple'
import NUS from './components/Experience/NUS'
import Lifehack from './components/Project/Lifehack'
import ECC from './components/Project/ECC'
import Huawei from './components/Project/Huawei'
import { useState } from 'react'

function experience(currExperience: number) {
  if (currExperience === 0) {
    return <Apple></Apple>
  } else {
    return <NUS></NUS>
  }
}

function project(currExperience: number) {
  if (currExperience === 0) {
    return <Lifehack></Lifehack>
  } else if (currExperience === 1) {
    return <Huawei></Huawei>
  } else {
    return <ECC></ECC>
  }
}

function App() {
  const [selectedDataExperience, setExperienceData] = useState(0)
  const sendDataExperience = (data: number) => {setExperienceData(data)}
  let experienceTitles = ["Apple", "NUS"]

  const [selectedDataProject, setProjectData] = useState(0)
  const sendDataProject = (data: number) => {setProjectData(data)}
  let projectTitles = ["LifeHack 2023", "Huawei Tech4City 2022", "NUS ECC 2022"]

  return (
  <>
    <title> Ryan's Personal Website </title>
    <div className="mainDiv">
      <div>
        <h1 className="hide"> a </h1>
      </div>

      <div className="topDiv">
        <header className="frontHeader"> Hi I'm Ryan! </header>
        <h2>Coming Y4 Business Analytics student in the National University of Singapore, 
          passionate about algorithms and spreading the same passion as an educator!
        </h2>
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
        <br></br>
        <ListGroup items={experienceTitles} sendData={sendDataExperience}></ListGroup>
        <h3>{experience(selectedDataExperience)}</h3>
      </div>

      <div className="projectsDiv">
        <h1>Competitions</h1>
        <br></br>
        <ListGroup items={projectTitles} sendData={sendDataProject}></ListGroup>
        <h3>{project(selectedDataProject)}</h3>
      </div>

      <div className="educationDiv">
        <h1>Education</h1>
        <h3>Bachelor of Science in Business Analytics with a minor in Economics</h3>
        <h5> Aug 2022 - Present</h5>
        <br></br>
        <h5>Received Certificate of Distinction for Analytics Techniques</h5>
        <h5>A- for CS3233 Competitive Programming, a selective module for algorithmic thinking</h5>
        <br></br>
        <h5>Activities:</h5>
        <h5>Deputy Executive of NUS Chinese History Club, organising sessions on Chinese Traditions</h5>
        <h5>Taught basic analysis of algorithms to freshmen for NUS Computing Club's Winter Workshop 2022</h5>
      </div>
    </div>
  </>)
}

export default App;