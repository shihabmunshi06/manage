import aboutData from "./data/aboutData"

export default function About() {
    return (
        <div className="about">

            <div className="left">
                <h2>What&#39;s different about Manage? </h2>
                <p>Manage provides all the functionality your team needs, without any complexity. Our software is tailor-made from modern digital product teams</p>
            </div>

            <div className="right">
                {aboutData.map((each) => {
                    return (
                        <section key={each.id}>

                            <div className="before">
                                <p>{each.id}</p>
                            </div>
                            <div className="text-bg">

                                <h3>{each.title}</h3>
                            </div>

                            <p>{each.text}</p>
                        </section>
                    )
                })}

            </div>
        </div>
    )
}
