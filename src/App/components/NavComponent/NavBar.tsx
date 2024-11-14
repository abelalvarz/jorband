import { useState } from "react"
import './theme/themeHeader.css'
import './theme/themeNavigation.css'
import { Navigation } from "./components/Navigation"
import { Header } from "./components/Header"

export const NavBar = () => {

    const [visible, setVisible] = useState(false)
    return (
        <div>
            <Header visible={visible} setVisible={setVisible} />
            <Navigation visible={visible} setVisible={setVisible} />
        </div>
    )
}

