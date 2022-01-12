import './topbar.css'
import { FaBars } from 'react-icons/fa'
export const Topbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <div className="logo">
            <i className="fas fa-dice-six" style={{ fontSize: '40px' }}></i>
          </div>
          <button className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <div className="links-container show-container">
          <ul className="links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact-Me</a>
            </li>
          </ul>
        </div>
        <ul className="social-icons">
          <li>
            <a href="https://www.facebook.com/kaushik.baidya.161">
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/KaushikBaidya">
              <i class="fab fa-github-alt"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/kaushik-baidya-696247157/">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    // <div className="top-bar">
    //   <div className="logo">
    //     <i className="fas fa-dice-six" style={{ color: 'tomato' }}></i>
    //   </div>
    //   <div className="nav-bar">
    //     <ul>
    //       <li className="active">Home</li>
    //       <li>About</li>
    //       <li>Projects</li>
    //       <li>Contact</li>
    //     </ul>
    //   </div>
    // </div>
  )
}
