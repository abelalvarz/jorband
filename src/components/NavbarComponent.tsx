import { Link } from 'react-router-dom'
import './NvbarStyle.css'
import { useState } from 'react'
import { Button } from 'primereact/button'
const NavbarComponent = () => {

  const [navOpen, setNavOpen] = useState(false)
  return (
    <>
      <div className="burger-icon">
        {
          navOpen ? (
            <Button icon="pi pi-times" rounded onClick={() => setNavOpen(!navOpen)} severity="danger" />
          ) : (
            <Button icon="pi pi-bars" rounded text onClick={() => setNavOpen(!navOpen)} />
          )
        }
      </div>
      <div className={`nav-container ${navOpen ? "open" : "close"}`} onClick={() => setNavOpen(!navOpen)}>

        <div className={`nav-content ${navOpen ? "open" : "close"}`}>
          <div className="nav-item">
            <li>
              <Link to='/'>
                <i className="pi pi-home" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/lists">
                <i className="pi pi-list" />
                <span>Listados</span>
              </Link>
            </li>
            <li>
              <Link to="/repertoire">
                <i className="pi pi-headphones" />
                <span>Repertorio</span>
              </Link>
            </li>
          </div>
        </div>
      </div>

    </>




  )
}

export default NavbarComponent
