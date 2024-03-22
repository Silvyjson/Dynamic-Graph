import GraphCardHeading from "./components/GraphCardHeading"
import HeaderSection from "./components/HeaderSection"
import GraphCardData from "./components/GraphCardData"
import { logo } from "./assets/images"

function App() {

  return (
    <div className="main-section">
      <HeaderSection />
      <div className="graph-body">
        <GraphCardHeading />
        <GraphCardData />
      </div>
      <span className="footer-logo">
        <img src={logo} alt="logo" className="logo2" />
      </span>
    </div>
  )
}

export default App
