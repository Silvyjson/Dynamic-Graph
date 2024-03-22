import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NSE_logo } from "../assets/images";
import Duration from "./Duration";

const GraphCardHeading = () => {
    return (
        <section className="graph-card-heading">
            <div className="graph-card-heading-container">
                <FontAwesomeIcon icon="fa-solid fa-angle-left" />
                <div className="graph-card-heading-content">
                    <span>
                        <img src={NSE_logo} alt="nse-logo" />
                        <h1>NIFTY 50</h1>
                    </span>
                    <span>
                        <p>
                            ₹ 21791.35
                        </p>
                        <p className="p2">
                            <FontAwesomeIcon icon="fa-solid fa-arrow-down" />
                            (0.12%)
                        </p>
                    </span>
                </div>
            </div>
            <Duration />
        </section>
    )
}

export default GraphCardHeading;