import Socials from "./parts/Socials"
import Nav from "./parts/Nav"
import Form from "./parts/Form"

import Logo from "../../assests/Logo"

export default function Footer() {
    return (

        <footer>
            <div className="logo-socials-wrapper">
                <Logo />
                <Socials />
            </div>
            <Nav />
            <Form />
            <p className="copyright">Copyright 2025. All Rights Reserved</p>
        </footer>
    )
}
