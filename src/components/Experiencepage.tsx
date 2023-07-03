import './Experiencepage.css'
import ListGroup from './ListGroup'
import Apple from './Experience/Apple'
import NUS from './Experience/NUS'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function experience(currExperience: number) {
    if (currExperience === 0) {
        return <Apple></Apple>
    } else {
        return <NUS></NUS>
    }
}

function Experiencepage() {
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

    const [selectedDataExperience, setExperienceData] = useState(0)
    const sendDataExperience = (data: number) => {setExperienceData(data)}
    let experienceTitles = ["Apple", "NUS"]
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
                    <a className="nav-link active" onClick={goToExperience}>Experience</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={goToProject}>Project</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={goToEducation}>Education</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="experienceDiv">
            <h1>Experience</h1>
            <br></br>
            <ListGroup items={experienceTitles} sendData={sendDataExperience}></ListGroup>
            <h3>{experience(selectedDataExperience)}</h3>
          </div>
        </div>
    )
}

export default Experiencepage