import './Projectpage.css'
import ListGroup from './ListGroup'
import Lifehack from './Project/Lifehack'
import ECC from './Project/ECC'
import Huawei from './Project/Huawei'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function project(currExperience: number) {
    if (currExperience === 0) {
      return <Lifehack></Lifehack>
    } else if (currExperience === 1) {
      return <Huawei></Huawei>
    } else {
      return <ECC></ECC>
    }
  }

function Projectpage() {
    const navigate = useNavigate()
    const goToAbout = () => {
        navigate('/')
    }
    const goToExperience = () => {
        navigate('/experience')
    }
    const goToProject = () => {
        navigate('/project')
    }
    const goToEducation = () => {
        navigate('/education')
    }

    const [selectedDataProject, setProjectData] = useState(0)
    const sendDataProject = (data: number) => {setProjectData(data)}
    let projectTitles = ["LifeHack 2023", "Huawei Tech4City 2022", "NUS ECC 2022"]

    return (
        <div className="mainDiv">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" onClick={goToAbout}>Ryan</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" onClick={goToAbout}>About me</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={goToExperience}>Experience</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" onClick={goToProject}>Project</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={goToEducation}>Education</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="projectsDiv">
            <h1>Competitions</h1>
            <br></br>
            <ListGroup items={projectTitles} sendData={sendDataProject}></ListGroup>
            <h3>{project(selectedDataProject)}</h3>
          </div>
        </div>
    )
}

export default Projectpage