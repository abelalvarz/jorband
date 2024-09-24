import { Link } from 'react-router-dom'

const NavbarComponent = () => {
  return (
    <div style={{
      width: '10%',
      margin: 0,
      height: '100vh',
      display: 'flex',
      backgroundColor: 'gray',
      position: 'fixed',
    }}>
        <center>
            <ul>
                <Link to='/'>Home</Link>
            </ul>
        </center>
      
    </div>
  )
}

export default NavbarComponent
