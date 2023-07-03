import './Educationpage.css'
import ListGroup from './ListGroup'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function education(currExperience: number) {
    if (currExperience === 0) {
      return (
      <div>
        <h5>CS3233 Competitive Programming A-</h5>
        <h5>EC3391 Evolution of Economic Thought A</h5>
        <h5>BT3102 Computational Methods for Business Analytics A</h5>
        <h5>BT4222 Mining Web Data for Business Insights A</h5>
        <h5></h5>
      </div>)
    } else if (currExperience === 1) {
      return (
        <div>
          <h5>Received Certificate of Distinction for Analytics Techniques</h5>
          <h5>Inducted to School of Computing's honor list of student TAs</h5>
        </div>)
    } else {
      return (
        <div>
          <h5>Deputy Executive of NUS Chinese History Club, organising sessions on Chinese Traditions</h5>
          <h5>Taught basic analysis of algorithms to freshmen for NUS Computing Club's Winter Workshop 2022</h5>
        </div>)
    }
  }

function Educationpage() {
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

    const [selectedDataEducation, setEducationData] = useState(0)
    const sendDataEducation = (data: number) => {setEducationData(data)}
    let educationTitles = ["Modules", "Awards", "Activities"]

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
                    <a className="nav-link" onClick={goToProject}>Project</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" onClick={goToEducation}>Education</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="educationDiv">
            <h1>Education</h1>
            <h3>National University of Singapore</h3>
            <h4>Bachelor of Science in Business Analytics with a minor in Economics</h4>
            <h5> Aug 2022 - Present</h5>
            <br></br>
            <ListGroup items={educationTitles} sendData={sendDataEducation}></ListGroup>
            <h3>{education(selectedDataEducation)}</h3>
          </div>
        </div>
    )
}

export default Educationpage