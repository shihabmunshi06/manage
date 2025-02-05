import Button from "../../components/Button"

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
gsap.registerPlugin(useGSAP);

export default function Homepage() {

    useEffect(() => {
        gsap.to(".left", { x: "0%", duration: 1 })
        gsap.to(".img-div", { x: "0%", duration: 1 });
    })

    return (
        <div className="homepage">
            <div className="left">
                <h1>Bring everyone together to build better products</h1>
                <p>manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view. </p>
                <Button />
            </div>
            <div className="img-div">
                <img src="/svg/illustration-intro.svg" alt="hero background" />
            </div>
        </div>
    )
}

