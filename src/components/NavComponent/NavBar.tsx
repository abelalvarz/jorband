import { useState } from "react"
import { Header } from "./components/Header"
import './theme/themeHeader.css'
import './theme/themeNavigation.css'
import { Navigation } from "./components/Navigation"

export const NavBar = () => {

    const [visible, setVisible] = useState(false)
    return (
        <div>
            <Header visible={visible} setVisible={setVisible} />
            <Navigation visible={visible} setVisible={setVisible} />
        </div>
    )
}

