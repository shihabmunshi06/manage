import Homepage from "./layout/2-Homepage/Homepage"
import About from "./layout/3-About/About"
import Testimony from "./layout/4-Testimony/Testimony"
import Cta from "./layout/5-cta/Cta"
import Footer from "./layout/6-Footer/Footer"

// import simplifyDesktop from "../public/svg/bg-simplify-section-desktop.svg"
// import simplifyMobile from "../public/svg/bg-simplify-section-mobile.svg"
// import simplifyTablet from "../public/svg/bg-tablet-pattern.svg"

export default function App() {
  return (
    <div className="main">
      <Homepage />
      <About />
      <Testimony />
      <Cta />
      <Footer />
    </div>
  )
}
