import Nav from "./parts/Nav"
import Button from "../../components/Button"
import MenuIcon from "../../assests/MenuIcon"
import CrossIcon from "../../assests/CrossIcon"

import { useState } from "react"
export default function Top() {
    const [menuOpen, setMenuOpen] = useState(false)
    const handleMenu = () => {
        setMenuOpen(true)
    }
    const handleCross = () => {
        setMenuOpen(false)
    }
    return (
        <div className="top-bg">
            <div className="top">
                <div className="img-div">
                    <img src="/svg/logo.svg" alt="manage logo" />
                </div>
                <div className={`nav-bg ${menuOpen ? "active" : ""}`}>
                    <div className="nav-svg-wrapper">
                        <CrossIcon onClick={handleCross} />
                        <Nav />
                    </div>

                </div>
                <Button />
                <div className="menu" onClick={handleMenu}>
                    <MenuIcon />
                </div>
            </div>
        </div>

    )
}
