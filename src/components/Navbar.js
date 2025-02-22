import { useState } from "react";
import { useNavigate } from "react-router-dom"
import userpng from '../assets/user.jpg';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const goToProfile = () => {
    navigate("/profile"); 
  };

return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">Cybersecurity Awareness</a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarText"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`} id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/home">Home</a>
            </li>
{/* ********************************************************************************************************************** */}
<DropdownButton id="dropdown-basic-button" title="Modules" menuVariant="dark" variant="outline-light"style={{border: "none", backgroundColor: "transparent", boxShadow:"none"}}>
      <Dropdown.Item href="/Phishing">Phishing</Dropdown.Item>
      <Dropdown.Item href="/">Another action</Dropdown.Item>
      <Dropdown.Item href="/">Something else</Dropdown.Item>
    </DropdownButton>
{/* ********************************************************************************************************************** */}
            {/* <li className="nav-item">
              <a className="nav-link" href="/quiz">Quiz</a>
            </li> */}
<DropdownButton id="dropdown-basic-button" title="Quiz" menuVariant="dark" variant="outline-light"style={{border: "none", backgroundColor: "transparent", boxShadow:"none", margin: " 0 0 0 10px"}}>
      <Dropdown.Item href="/QuizA">Quiz 1</Dropdown.Item>
      <Dropdown.Item href="/">Another action</Dropdown.Item>
      <Dropdown.Item href="/">Something else</Dropdown.Item>
    </DropdownButton>

          </ul>



          <img
            src={userpng} 
            alt="Profile"
            className="rounded-circle"
            width="40"
            height="40"
            style={{ cursor: "pointer" }}
            onClick={goToProfile} 
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
