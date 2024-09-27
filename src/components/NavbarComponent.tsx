import { Link } from 'react-router-dom'

const NavbarComponent = () => {
  return (
    <div style={{
    }}>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/lists">Listados</Link></li>
        <li><Link to="/repertoire">Repertorio</Link></li>
      </ul>

    </div>
  )
}

export default NavbarComponent
