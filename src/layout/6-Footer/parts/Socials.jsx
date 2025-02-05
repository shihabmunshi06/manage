import { Link } from "react-router"
import socialsData from "../data/socialsData"

import FacebookIcon from "../../../assests/FacebookIcon"
import YoutubeIcon from "../../../assests/YoutubeIcon"
import TwitterIcon from "../../../assests/TwitterIcon"
import PinterestIcon from "../../../assests/PinterestIcon"
import InstagramIcon from "../../../assests/InstagramIcon"

const socialIconMapping = {
    facebook: FacebookIcon,
    youtube: YoutubeIcon,
    twitter: TwitterIcon,
    pinterest: PinterestIcon,
    instagram: InstagramIcon,
};


export default function Socials() {
    return (
        <section className="socials">
            <ul>
                {socialsData.map((each) => {
                    const IconComponent = socialIconMapping[each.socialName];
                    return (
                        <li key={each.socialName}>
                            <Link to={each.link}>
                                {IconComponent ? <IconComponent /> : null}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}