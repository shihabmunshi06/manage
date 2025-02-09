import Card from "./parts/Card"
import testimonyData from "./data/testimonyData"
import Button from "../../components/Button"
import { useState } from "react"


export default function Testimony() {
    const [imageIndex, setImageIndex] = useState(0)

    const handleNext = () => {
        setImageIndex(prev => prev + 1)
    }
    const handlePrev = () => {
        setImageIndex(prev => prev - 1)
    }


    return (
        <div className='testimony'>

            <h2>What they have said</h2>

            <div className="caraousel">
                <div className="cards">
                    <Card
                        imageIndex={imageIndex}
                        {...testimonyData[testimonyData.length - 1]}
                    />
                    {testimonyData.map(each => {
                        return (
                            <Card
                                key={each.personName}
                                imageIndex={imageIndex}
                                {...each}
                            />

                        )
                    })}
                    <Card
                        imageIndex={imageIndex}
                        {...testimonyData[0]}
                    />
                </div>
                <div className="button-wrapper">
                    <button disabled={imageIndex === 0} onClick={handlePrev} className="prev">prev</button>
                    <button disabled={imageIndex === testimonyData.length - 1} onClick={handleNext} className="next">next</button>
                </div>
            </div>
            <div className="cta-wrapper">
                <Button />
            </div>
        </div>
    )
}
