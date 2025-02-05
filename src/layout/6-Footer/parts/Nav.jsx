import { NavLink } from "react-router"

import navData from "../data/navData"

export default function Nav() {
    return (
        <nav>
            <ul>
                {navData.map((each) => {
                    return (
                        <li key={each.navName}>
                            <NavLink>{each.navName}</NavLink>
                        </li>
                    )
                })}

            </ul>
        </nav>
    )
}
