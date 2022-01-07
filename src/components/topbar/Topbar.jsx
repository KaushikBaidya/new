import './topbar.css'
export const Topbar = () => {
  return (
    <div className="top-bar">
      <div className="logo">
        <i className="fas fa-dice-six" style={{ color: 'tomato' }}></i>
      </div>
      <div className="nav-bar">
        <ul>
          <li className="active">home</li>
          <li>about</li>
          <li>contact</li>
          <li>help</li>
        </ul>
      </div>
    </div>
  )
}
