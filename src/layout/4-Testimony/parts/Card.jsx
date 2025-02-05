import { useEffect, useState } from "react";

export default function Card({ image, personName, opinion, imageIndex }) {


    const calculateOffset = (width, index) => {
        if (width <= 850) {
            return 100 * index;
        } else {
            return 100 * index + 50;
        }
    };

    const [offset, setOffset] = useState(calculateOffset(window.innerWidth, imageIndex));

    useEffect(() => {
        const handleResize = () => {
            setOffset(calculateOffset(window.innerWidth, imageIndex));
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [imageIndex]);


    let style = {
        transform: `translateX(-${offset}%)`
    };
    return (
        <section style={style}>
            <div className="img-div">
                <img src={image} alt={personName} />
            </div>
            <h3>{personName}</h3>
            <p>{opinion}</p>
        </section>
    )
}
