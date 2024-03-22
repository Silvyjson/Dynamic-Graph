import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { emoji, logo } from "../assets/images"

const HeaderSection = () => {
    return (
        <section className="header-section">
            <h3>Nifty 50 is trading <b>below</b> its</h3>
            <h1>50-day moving average
                <img src={emoji} alt="emoji" width={50} />
            </h1>
            <div className="header-section_content">
                <img src={logo} alt="logo" />
                <div>
                    <p>powered by</p>
                    <span className="company-name">
                        <FontAwesomeIcon icon="fa-solid fa-bolt-lightning" className="font-awesome1"/>
                        <p>Streak</p>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default HeaderSection