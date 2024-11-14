import { Link } from 'react-router-dom'

interface Props {
    visible: boolean;
    setVisible: (value: boolean) => void;
}

export const Navigation = ({ visible, setVisible }: Props) => {
    return (
        <div className={`nav-container ${visible ? "open" : "close"}`} onClick={() => setVisible(!visible)}>

            <div className={`nav-content ${visible ? "open" : "close"}`}>
                <div className="nav-item">
                    <li>
                        <Link to='/'>
                            {/* <i className="pi pi-home" /> */}
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/lists">
                            {/* <i className="pi pi-list" /> */}
                            <span>Listados</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/repertoire">
                            {/* <i className="pi pi-headphones" /> */}
                            <span>Repertorio</span>
                        </Link>
                    </li>
                </div>
            </div>
        </div>
    )
}
