import logoWhite from "./../../assets/CatwikiLogo-white.svg";
import "./footer.scss";

export default function Footer() {
    return (
        <footer>
            <div className="logo">
                <img src={logoWhite} alt="Cat Wiki logo white variant" />
            </div>
            <div className="author-wrapper">
                <h2>
                    <span className="copyright">&#169;</span>
                    created by <a href="https://devchallenges.io/portfolio/TheChiran" target="_blank" className="author">ChiranSWE</a>-<a href="https://devchallenges.io/" className="url">devChallenge.io</a> <span className="date">{new Date().getFullYear()}</span>
                </h2>
            </div>
        </footer>
    )
}