import { NavLink } from "react-router";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        About Us
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/testimony"
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        Testimony
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/careers"
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        Careers
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/community"
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        Community
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
