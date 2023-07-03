import './Aboutpage.css'
import { useNavigate } from 'react-router-dom'

function Aboutpage() {
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
                    <a className="nav-link active" aria-current="page" onClick={goToAbout}>About me</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={goToExperience}>Experience</a>
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
            <h4>
              I experience a thrill when trying to solve problems beyond my current capability, 
              and work really hard to overcome them! 
              I also find remarkable the amount of flexibility programming offers, 
              and how it can be used as a platform to express our creativity. 
              I aspire to marry tech and art, and guide others to unlock their creativity using tech as well!
              </h4>
          </div>
      </div>)
}

export default Aboutpage